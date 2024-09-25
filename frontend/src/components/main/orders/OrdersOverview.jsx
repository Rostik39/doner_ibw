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
    const { data, error, isPending, fetchData } = useFetch(token, setToken);

    useEffect(() => {
        fetchData("/orders",
            'GET',
            { doOnSuccess: (data) => setOrders(data) }
        )
    }, [])

    return (
        <div className="page__orders orders">
            {isPending &&
                <Loading />
            }
            {error &&
                <div>{error}</div>
            }
            {data &&
                <div className="orders__container">
                    {orders.map((order)=>
                        <Collapsible trigger={order.user.username} key={order.user.username}>
                            <div className="Collapsible__body">
                                <div className="Collapsible__balance balance">
                                    <div className="balance__text">Guthaben : </div>
                                    <NumberInput className={"balance"} initValue={order.user.balance} username={order.user.username}/>
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
                                                {Array.isArray(item.price) && <OptionsDropdown id={item.dish_id} options={item.price} initValue={item.selected_size}/>}
                                                {item.sauces && <CustomCheckBox id={item.dish_id} sauces={item.sauces}/>}
                                            </div>
                                            <div className="list__price">
                                            {Array.isArray(item.price)
                                                ? (item.price.find(p => p[item.selected_size])?.[item.selected_size] * item.quantity).toFixed(2)
                                                : (item.price * item.quantity).toFixed(2)}
                                            </div>
                                            <Quantity parentClass={"list"} item={item} isDisabled={true}/>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Collapsible>
                    )}
                </div>
            }
        </div>
    );
}

export default OrdersOverview;