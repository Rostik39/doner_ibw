import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./main/Home.jsx";
import Menu from "./main/Menu.jsx";
import SignIn from "./authentication/SignIn.jsx";
import SignUp from "./authentication/SignUp.jsx";
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import useToken from "../functions/useToken.jsx";
import { Cart } from "./main/cart/Cart.jsx";
import {CartProvider} from "./main/cart/CartProvider.jsx";
import ErrorPage from "./main/ErrorPage.jsx"
import init from '../js/app';


const AppContent = () => {
    const { token, removeToken, setToken } = useToken();
    const location = useLocation();

    useEffect(()=>{
        const rootEl = document.querySelector('.wrapper');
        if (location.pathname === '/signIn' || location.pathname === '/signUp') {
            rootEl.classList.add('bg-fs');
        } else {
            rootEl.classList.remove('bg-fs');
        }
    }, [location.pathname])

    return (
        <>
            {token && token !== "" && token !== undefined ? (
                <>
                    <CartProvider>
                        {location.pathname !== '/' &&
                            location.pathname !== '/cart' &&
                            location.pathname !== '/menu' ? null : <Header logout={removeToken} />}
                        <main className="page">
                            <Routes>
                                <Route path='/' element={<Home token={token} setToken={setToken} />} />
                                <Route path='/menu' element={<Menu token={token} setToken={setToken} />} />
                                <Route path='/cart' element={<Cart token={token} setToken={setToken} />} />
                                <Route path="*" element={<ErrorPage />} />
                            </Routes>
                        </main>
                        {location.pathname !== '/' &&
                            location.pathname !== '/cart' &&
                            location.pathname !== '/menu' ? null : <Footer />}
                    </CartProvider>
                </>
            ) : (
                <main className="page">
                    <Routes>
                        <Route path='/' element={<Navigate to='/signIn'/>} />
                        <Route path='/signIn' element={<SignIn setToken={setToken} />} />
                        <Route path='/signUp' element={<SignUp />} />
                        <Route path="*" element={<ErrorPage/>} />
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