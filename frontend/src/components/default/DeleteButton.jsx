import React, { useContext } from 'react';
import { CartContext } from '../main/cart/CartProvider';
import DeleteSvg from "../../img/delete.svg";

const DeleteButton = ({parentClass, dish}) => {
    const { removeFromCart } = useContext(CartContext);

    return ( 
        <button className={`${parentClass}__delete`} onClick={() => removeFromCart(dish)}>
            <img src={DeleteSvg} alt="delete"/>
        </button>
    );
}
 
export default DeleteButton;