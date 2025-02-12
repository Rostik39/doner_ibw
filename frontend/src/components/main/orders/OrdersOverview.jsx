import React, { useEffect, useState } from 'react';
import Collapsible from 'react-collapsible';
import useFetch from '../../../functions/useFetch';
import Loading from '../../default/Loading';
import CustomCheckBox from '../../default/CustomCheckBox';
import OptionsDropdown from '../../default/OptionsDropdown';
import Quantity from '../../default/Quantity';
import NumberInput from '../../default/NumberInput';
import { useDispatch, useSelector } from 'react-redux';
import { initTip, switchTip } from '../../../state/Tip/tipSlice';


const OrdersOverview = ({ token, setToken }) => {
    const dispatch = useDispatch();
    const tip = useSelector((state) => state.tip.value);
    const { data, error, isPending, fetchData } = useFetch(token, setToken);
    const [orders, setOrders] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalPriceWithTip, setTotalPriceWithTip] = useState(0);
    const [openState, setOpenState] = useState(false);
    const [buttonText, setButtonText] = useState('');
    const todaysDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    });


    useEffect(() => {
        fetchData("/orders",
            'GET',
            { doOnSuccess: (data) => setOrders(data) }
        )
        fetchData("/tip",
            'GET',
            { doOnSuccess: (data) => dispatch(initTip(data)) }
        )
    }, [])


    //* calculate total price 
    useEffect(() => {
        let calculatedTotalPrice = 0;
        let calculatedTotalPriceWithTip = 0;

        orders.forEach(order => {
            if (todaysDate === order.date) {
                order.cart.forEach(item => {
                    let price;

                    // Check if the price is an array and find the price by selected size
                    if (Array.isArray(item.price)) {
                        let selectedSize = item.selected_size;
                        let priceObject = item.price.find(p => p[selectedSize] !== undefined);
                        price = priceObject[selectedSize];
                    } else {
                        price = parseFloat(item.price);
                    }

                    // Calculate the total price for the item (price * quantity)
                    calculatedTotalPrice += price * item.quantity;
                    calculatedTotalPriceWithTip += price * item.quantity;
                });
                if (tip) {
                    calculatedTotalPriceWithTip += 0.5
                }
            }
        });

        setTotalPrice(calculatedTotalPrice)
        setTotalPriceWithTip(calculatedTotalPriceWithTip)

    }, [orders]);

    useEffect(() => {
        if (buttonText === "anzeigen") {
            setButtonText("schließen")
        } else {
            setButtonText("anzeigen")
        }
    }, [openState]);

    const handleCheckState = () => {
        if (!tip) {
            setOrders(
                orders.map(order => {
                    if (todaysDate === order.date) {
                        return {
                            ...order,
                            user: {
                                ...order.user,
                                balance: (parseFloat(order.user.balance) - 0.5).toFixed(2)
                            }
                        };
                    }
                    return order;
                })
            );
        } else {
            setOrders(
                orders.map(order => {
                    if (todaysDate === order.date) {
                        return {
                            ...order,
                            user: {
                                ...order.user,
                                balance: (parseFloat(order.user.balance) + 0.5).toFixed(2)
                            }
                        };
                    }
                    return order;
                })
            );
        }

        dispatch(switchTip())
        fetchData("/tip", "POST", {
            body: {
                tip: !tip
            }
        })
    }


    return (
        <div className="page__orders orders">
            {error &&
                <p>{error}</p>
            }
            {orders.length > 0 &&
                <>
                    <div className="orders__container">
                        <button className="orders__button" onClick={() => setOpenState(!openState)}>Alle Bestellungen {buttonText}</button>
                        <div className="orders__items">
                            {orders.map((order) =>
                                <Collapsible trigger={order.user.username} key={order.user.username} open={openState} handleTriggerClick={() => { }}>
                                    <div className="Collapsible__body">
                                        <div className="Collapsible__balance balance">
                                            <div className="balance__text">Guthaben : </div>
                                            <NumberInput
                                                className={"balance"}
                                                initValue={order.user.balance}
                                                username={order.user.username}
                                                token={token}
                                                setToken={setToken}
                                                updateBalance={setOrders}
                                                orders={orders}
                                                today={todaysDate}
                                            />
                                        </div>
                                        <div className="Collapsible__date">Datum : {order.date}</div>
                                        <ul className="cart--page__list list">
                                            {order.cart.map((item) => (
                                                <li className="list__item" key={item.dish_id}>
                                                    <div className="list__body">
                                                        <div className="list__number">{item.number}</div>
                                                        <div className="list__text">
                                                            <div className="list__title">{item.name}</div>
                                                        </div>
                                                        {Array.isArray(item.price) && <OptionsDropdown id={item.dish_id} options={item.price} initValue={item.selected_size} />}
                                                        {item.sauces && <CustomCheckBox id={item.dish_id} sauces={item.sauces} />}
                                                    </div>
                                                    <div className="list__price">
                                                        {Array.isArray(item.price)
                                                            ? (item.price.find(p => p[item.selected_size])?.[item.selected_size] * item.quantity).toFixed(2)
                                                            : (item.price * item.quantity).toFixed(2)}
                                                    </div>
                                                    <Quantity parentClass={"list"} item={item} isDisabled={true} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Collapsible>
                            )}
                        </div>
                    </div>
                    <div className="orders__box">
                        <div className="orders__prices">
                            <div className="orders__total">Gesamtsumme : {totalPrice.toFixed(2)}</div>
                            {tip && <div className="orders__totalWithTip">mit Trinkgeld : {totalPriceWithTip.toFixed(2)}</div>}
                        </div>
                        <div className="orders__tip">
                            <label htmlFor="tip">Trinkgeld</label>
                            <input
                                type="checkbox"
                                id="tip"
                                checked={tip}
                                className='orders__checkbox'
                                onChange={handleCheckState}
                            />
                        </div>
                    </div>
                </>
            }
            {orders.length < 1 && Array.isArray(data) && <p>Es gibt keine Bestellung für heute</p>}
        </div>
    );
}

export default OrdersOverview;