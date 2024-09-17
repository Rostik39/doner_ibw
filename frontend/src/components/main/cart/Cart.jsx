import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartProvider"
import OptionsDropdown from "../../default/OptionsDropdown";
import CustomCheckBox from "../../default/CustomCheckBox";


const Cart = () => {
    const { cart, totalPrice, updateCart } = useContext(CartContext);
    const url = "http://127.0.0.1:5000/cart/";


    const decreaseQuantity = (dish, currentQuantity) => {
      if (currentQuantity > 1) {
        updateCart(dish, currentQuantity - 1);
      }
    };
  
    const increaseQuantity = (dish, currentQuantity) => {
      updateCart(dish, currentQuantity + 1);
    };

    const handleOrder = () => {
        const cartUrl = url + "order";
        fetch(cartUrl, {
            headers: {
                Authorization: 'Bearer ' + props.token
            },
            data : cart
        }).then(res => {
            if (!res.ok) {
                if (res.status === 401){
                    alert("Session has expired");
                    const buttonLogout = document.getElementById("logout");
                    buttonLogout.click();
                }
                throw Error('could not fetch the data for that resource');
            }
            return res.json();
        })
        .then((data) => {

        })
        .catch(err => {

        });
    }

    return ( 
        <div className="page__cart cart--page">
            <div className="cart--page__container">
                <div className="cart--page__money">Guthaben : <span>20.00</span></div>
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
                                            {item.sauces && <CustomCheckBox/>}
                                        </div>
                                        <div className="list__price">
                                        {Array.isArray(item.price) 
                                            ? (item.price.find(p => p[item.selected_size])?.[item.selected_size] * item.quantity).toFixed(2)
                                            : (item.price * item.quantity).toFixed(2)}
                                        </div>
                                        <div className="list__quantity quantity">
                                            <Link to="#" onClick={()=> decreaseQuantity(item, item.quantity)} className="quantity__minus"><span>-</span></Link>
                                            <input name="quantity" type="text" className="quantity__input" value={item.quantity} readOnly/>
                                            <Link to="#" onClick={()=> increaseQuantity(item, item.quantity)} className="quantity__plus"><span>+</span></Link>
                                        </div>
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

        </div>
     );
}
 
export {Cart};