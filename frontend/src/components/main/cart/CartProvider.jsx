import React, { createContext, useEffect, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartCounter, setCartCounter] = useState(0);
    const [isInitialized, setIsInitialized] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            const jsonSavedCart = JSON.parse(savedCart);
            setCart(jsonSavedCart);

            let initCartCounter = 0;
            for(let i = 0; i < jsonSavedCart.length; i++){
                initCartCounter = initCartCounter + jsonSavedCart[i].quantity;
            }
            setCartCounter(initCartCounter);
        }
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized) {
            const oldLocalStorage = localStorage.getItem('cart');
            const newLocalStorage = JSON.stringify(cart);
            localStorage.setItem('cart', newLocalStorage);
            if(oldLocalStorage !== newLocalStorage) {
                document.querySelector('.cart__amount').classList.add("impulse")
                setTimeout(()=>{
                    document.querySelector('.cart__amount').classList.remove("impulse");
                }, 500)

            }
            setTotalPrice(countTotalPrice());
        }
    }, [cart, isInitialized]);

    const countTotalPrice = () => {
        let result = 0;
        for(let i = 0; i < cart.length; i++){
            const item = cart[i];
            if(Array.isArray(item.price)) {
                result += item.price.find(p => p[item.selected_size])?.[item.selected_size] * item.quantity
            } else {
                result += item.price*item.quantity;
            }
        }
        
        return result;
    }

    const removeFromCart = (dish) => {
        setCart((prevCart) => 
            prevCart.filter((item) => item.dish_id !== dish.dish_id)
        );
    };

    const updateCart = (dish, category, newQuantity=null) => {
        setCart((prevCart) => {
            const isDishInCart = prevCart.find((item) => dish.dish_id === item.dish_id);
            
            if(isDishInCart) {
                return prevCart.map((item) => {
                    if(item.dish_id === dish.dish_id){
                        if(!newQuantity){
                            setCartCounter(cartCounter+1);
                            return { ...item, quantity: item.quantity+1 }
                        } else {
                            if(item.quantity > newQuantity){
                                setCartCounter(cartCounter-1);
                                return { ...item, quantity: newQuantity }
                            } else {
                                setCartCounter(cartCounter+1);
                                return { ...item, quantity: newQuantity }
                            }
                        }
                    }
                    return item
                });
            } else {
                setCartCounter(cartCounter+1);
                if(Array.isArray(dish.price)) {
                    return [...prevCart, {...dish, selected_size: "Klein", quantity: 1}];
                } else if (category === "Döner-Dürüm-Pide") {
                    return [...prevCart, {...dish, sauces: [], quantity: 1}];
                } else {
                    return [...prevCart, {...dish, quantity: 1}];
                }
            }
        });
    };

    const handleChangeOption = (id, newOption) => {
        setCart((prevCart) => 
            prevCart.map((item) => 
                item.dish_id === id ? {...item, selected_size: newOption} : item
            )
        )
    }

    return (
        <CartContext.Provider value={{ cart, cartCounter, totalPrice, removeFromCart, updateCart, handleChangeOption }}>
            {children}
        </CartContext.Provider>
    );
};

export {CartProvider, CartContext};