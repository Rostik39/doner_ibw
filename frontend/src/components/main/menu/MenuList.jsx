import React, { useContext } from 'react';
import Sticky from 'react-sticky-el';
import PlusSvg from "../../../img/plus.svg"
import { CartContext } from '../cart/CartProvider';

const MenuList = ({ dishes, activeCategory }) => {

    const { updateCart } = useContext(CartContext);

    if (activeCategory !== "Pizza") {
        return (
            <ul className="menu--page__list list">
                {dishes.map((item) => (
                    <li key={item.dish_id} className="list__item">
                        <div className="list__body">
                            <div className="list__number">{item.number}</div>
                            <div className="list__text">
                                <div className="list__title">{item.name}</div>
                                {item.description && <div className="list__description">{item.description}</div>}
                            </div>
                        </div>
                        <div className="list__price">{item.price.toFixed(2)}</div>
                        <button onClick={() => updateCart(item, activeCategory, null)} className="list__button">
                            <img src={PlusSvg} alt="Add Item"/>
                        </button>
                    </li>
                ))}
            </ul>
        );
    }

    const groupedDishes = dishes.reduce((acc, dish) => {
        const subcategory = dish.subcategory_id;
        if (!acc[subcategory]) {
            acc[subcategory] = [];
        }
        acc[subcategory].push(dish);
        return acc;
    }, {});

    return (
        <ul className="menu--page__list list">
            {Object.keys(groupedDishes).map((subcategory) => (
                <React.Fragment key={subcategory}>
                    <Sticky stickyStyle={{ top: '137px' }} topOffset={-140}>
                        <div className="menu--page__pricelist pricelist">
                            {['Kinder', 'Klein', 'Groß', 'Family', 'Party'].map((size) => (
                                <div key={size} className="pricelist__item">
                                    <div className="pricelist__size">{size}</div>
                                    <div className="pricelist__price">
                                       {groupedDishes[subcategory][0].price.find(p => p[size])?.[size] || ''}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Sticky>
                    {groupedDishes[subcategory].map((dish) => (
                        <li key={dish.dish_id} className="list__item">
                            <div className="list__body">
                                <div className="list__number">{dish.number}</div>
                                <div className="list__text">
                                    <div className="list__title">{dish.name}</div>
                                    {dish.description && <div className="list__description">{dish.description}</div>}
                                </div>
                            </div>
                            <button onClick={() => updateCart(dish)} className="list__button">
                                <img src={PlusSvg} alt="Add Item"/>
                            </button>
                        </li>
                    ))}
                </React.Fragment>
            ))}
        </ul>
    );
};

export default MenuList;
