import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../main/cart/CartProvider';

const Quantity = ({parentClass, item, isDisabled=false}) => {
    const {updateCart} = useContext(CartContext);

    const decreaseQuantity = (dish, currentQuantity) => {
        if (currentQuantity > 1) {
          updateCart(dish, null, currentQuantity - 1);
        }
      };
    
      const increaseQuantity = (dish, currentQuantity) => {
        updateCart(dish, null, currentQuantity + 1);
      };

    return (  
        <div className={`${parentClass}__quantity quantity`}>
            <Link to="#" onClick={()=> decreaseQuantity(item, item.quantity)} className={`quantity__minus ${isDisabled ? 'disabled' : ''}`}><span>-</span></Link>
            <input name="quantity" type="text" className="quantity__input" value={item.quantity} readOnly/>
            <Link to="#" onClick={()=> increaseQuantity(item, item.quantity)} className={`quantity__plus ${isDisabled ? 'disabled' : ''}`}><span>+</span></Link>
        </div>
     );
}
 
export default Quantity;