import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./main/home/Home.jsx";
import Menu from "./main/menu/Menu.jsx";
import SignIn from "./authentication/SignIn.jsx";
import SignUp from "./authentication/SignUp.jsx";
import Header from "./header/Header.jsx";
import useToken from "../functions/useToken.jsx";
import { Cart } from "./main/cart/Cart.jsx";
import {CartProvider} from "./main/cart/CartProvider.jsx";
import Error from "./main/error/Error.jsx"
import init from '../js/app';
import OrdersOverview from './main/orders/OrdersOverview.jsx'


const AppContent = () => {
    const { token, removeToken, setToken } = useToken();
    const location = useLocation();

    // useEffect(()=>{
    //     const rootEl = document.querySelector('.wrapper');
    //     if (location.pathname === '/signIn' || location.pathname === '/signUp') {
    //         rootEl.classList.add('bg-fs');
    //     } else {
    //         rootEl.classList.remove('bg-fs');
    //     }
    // }, [location.pathname])

    return (
        <>
            {token && token !== "" && token !== undefined ? (
                <>
                    <CartProvider>
                        {location.pathname !== '/' &&
                            location.pathname !== '/cart' &&
                            location.pathname !== '/menu' &&
                            location.pathname !== '/orders-overview' ? null : <Header logout={removeToken} />}
                        <main className="page">
                            <Routes>
                                <Route path='/' element={<Home token={token} setToken={setToken} />} />
                                <Route path='/menu' element={<Menu token={token} setToken={setToken} />} />
                                <Route path='/cart' element={<Cart token={token} setToken={setToken} />} />
                                <Route path='/orders-overview' element={<OrdersOverview token={token} setToken={setToken}/>} />
                                <Route path="*" element={<Error/>} />
                            </Routes>
                        </main>
                    </CartProvider>
                </>
            ) : (
                <main className="page">
                    <Routes>
                        <Route path='/' element={<Navigate to='/signIn'/>} />
                        <Route path='/signIn' element={<SignIn setToken={setToken} />} />
                        <Route path='/signUp' element={<SignUp />} />
                        <Route path="*" element={<Error/>} />
                    </Routes>
                </main>
            )}
        </>
    )
}

export const App = () => {
    useEffect(()=>{
        init();
    })

    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;