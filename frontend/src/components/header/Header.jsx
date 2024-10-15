import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from 'react';
import Cart from "../../img/box.svg";
import { CartContext } from "../main/cart/CartProvider";
import useFetch from "../../functions/useFetch";

// images
import Logo from "../../img/ibw_logo.svg";


const Header = (props) => {
    const navigate = useNavigate();
    const {cartCounter} = useContext(CartContext);
    const {data, error, isPending, fetchData} = useFetch();

    const logMeOut = () => {
        fetchData("/logout",
            "POST",
            {
                doOnSuccess : () => {
                    props.logout();
                    navigate('/signIn');
                }
            }
        )
    }

    return ( 
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <Link to="/">
                        <img src={Logo} alt="Image"/>
                    </Link>
                </div>
                <div className="header__menu menu">
                    <nav className="menu__body">
                        <ul className="menu__list">
                            <li className="menu__item"><Link to="/menu" className="menu__link">Speisekarte</Link></li>
                            {/* <li className="menu__item"><Link to="/user" className="menu__link">User</Link></li> */}
                            <li className="menu__item"><Link to="/orders-overview" className="menu__link">Gesamtbestellung</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="header__right">
                    <Link className="header__cart cart" to="/cart">
                        <div className="cart__amount">{cartCounter}</div>
                        <div className="cart__image">
                            <img src={Cart} alt="Cart"></img>  
                        </div>
                    </Link>
                    <button data-da=".menu__body,767.98" className="header__logout" id="logout" onClick={logMeOut}>Logout</button>
                    <button type="button" className="menu__icon icon-menu"><span></span></button>
                </div>
            </div>
        </header>
     );
}
 
export default Header;