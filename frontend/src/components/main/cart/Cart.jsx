import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartProvider"
import OptionsDropdown from "../../default/OptionsDropdown";
import CustomCheckBox from "../../default/CustomCheckBox";
import useFetch from "../../../functions/useFetch";
import Loading from "../../default/Loading";
import Quantity from "../../default/Quantity";
import DeleteButton from "../../default/DeleteButton";
import { useSelector } from 'react-redux';


const Cart = (props) => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);
    const [balance, setBalance] = useState(0);
    const {data, error, isPending, fetchData} = useFetch(props.token, props.setToken);
    const tip = useSelector((state) => state.tip.value);

    useEffect(() => {
        fetchData("/balance", 
            "GET", 
            {
                doOnSuccess: (data) => setBalance(data.balance)
            }
        )
    }, [balance])

    const handleOrder = () => {
        let orderPrice;
        if (tip) {
            orderPrice = (totalPrice + 0.5).toFixed(2)
        } else {
            orderPrice = totalPrice.toFixed(2)
        }
        fetchData(
            "/cart/order", 
            "POST",        
            {
                body: {
                    cart: cart,
                    totalPrice: orderPrice
                }, 
                doOnSuccess: (data) => {
                    alert(data.message);
                    clearCart();
                }
            }
        );
    };

    return ( 
        <div className="page__cart cart--page">
            {error && <div style={{textAlign: "center"}}>{error}</div>}
            {isPending && <Loading />}
            {!error && !isPending &&
                <div className="cart--page__container">
                    <div className="cart--page__money">Guthaben : <span>{balance}</span></div>
                    <h2 className="cart--page__main-text">Deine Bestellung</h2>
                    <div className="cart--page__box">
                        <ul className="cart--page__list list">
                            {cart.length !== 0 ? 
                                <>
                                    {cart.map((item) => (
                                        <li className="list__item" key={item.dish_id}>
                                            <div className="list__body">
                                                <div className="list__number">{item.number}</div>
                                                <div className="list__text">
                                                    <div className="list__title">{item.name}</div>
                                                    {item.description && <div className="list__description">{item.description}</div>}
                                                </div>
                                                {Array.isArray(item.price) && <OptionsDropdown id={item.dish_id} options={item.price} initValue={item.selected_size}/>}
                                                {item.sauces && <CustomCheckBox id={item.dish_id} sauces={item.sauces}/>}
                                            </div>
                                            <div className="list__price">
                                            {Array.isArray(item.price) 
                                                ? (item.price.find(p => p[item.selected_size])?.[item.selected_size] * item.quantity).toFixed(2)
                                                : (item.price * item.quantity).toFixed(2)}
                                            </div>
                                            <Quantity parentClass={"list"} item={item}/>
                                            <DeleteButton parentClass={"list"} dish={item}/>
                                        </li>
                                    ))}
                                    <div className="cart--page__total">Gesamtsumme : {totalPrice.toFixed(2)}€</div>
                                </>
                                : <li className="list__empty"><p>Dein Warenkorb ist leer</p></li> 
                            }
                        </ul>
                    </div>
                    <button onClick={handleOrder} className="cart--page__button">Bestellen</button>
                </div>
            }

        </div>
     );
}
 
export {Cart};