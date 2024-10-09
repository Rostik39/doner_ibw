import React, { useEffect, useState } from 'react';
import Collapsible from 'react-collapsible';
import useFetch from '../../../functions/useFetch';
import Loading from '../../default/Loading';
import CustomCheckBox from '../../default/CustomCheckBox';
import OptionsDropdown from '../../default/OptionsDropdown';
import Quantity from '../../default/Quantity';
import NumberInput from '../../default/NumberInput';


const OrdersOverview = ({ token, setToken }) => {
    const [orders, setOrders] = useState([]);
    const [withTip, setTip] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const { data, error, isPending, fetchData } = useFetch(token, setToken);
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
            { doOnSuccess: (data) => setTip(data) }
        )
    }, [])


    //* calculate total price 
    useEffect(() => {
        let calculatedTotalPrice = 0;

        orders.forEach(order => {
            if (todaysDate === order.date){
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
                });
                if(withTip){
                    calculatedTotalPrice += 0.5
                }
            }
        });
        
        setTotalPrice(calculatedTotalPrice)
    }, [orders]);


    const handleCheckState = () => {
        if (!withTip) {
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

        setTip(!withTip);
        fetchData("/tip", "POST", {
            body: {
                withTip: !withTip
            }
        })
    }


    return (
        <div className="page__orders orders">
            {/* {isPending &&
                <Loading />
            } */}
            {error &&
                <div>{error}</div>
            }
            {data &&
                <>
                    <div className="orders__container">
                        {orders.map((order) =>
                            <Collapsible trigger={order.user.username} key={order.user.username}>
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
                    <div className="orders__box">
                        <div className="orders__total">Gesamtsumme : {totalPrice.toFixed(2)}</div>
                        <div className='orders__'>
                            <input 
                                type="checkbox"
                                id="tip"
                                checked={withTip}
                                className='orders__checkbox' 
                                onChange={handleCheckState}
                            />
                            <label htmlFor="tip">Trinkgeld</label>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default OrdersOverview;