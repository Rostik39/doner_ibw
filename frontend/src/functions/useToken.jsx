import { useState } from 'react';
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux';
import { initUser, logoutUser } from '../state/user/userSlice';

function useToken() {
    const dispatch = useDispatch();
    const [token, setToken] = useState(getToken());

    function getToken() {
        const name = 'token=';
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i].trim();
            if (cookie.indexOf(name) === 0) {
                const token = cookie.substring(name.length, cookie.length);
                const decodedToken = jwtDecode(token);
                dispatch(initUser({
                    username: decodedToken.sub.username,
                    admin: decodedToken.sub.admin
                }))
                return token
            }
        }
        return null;
    }

    function saveToken(userToken) {
        const d = new Date();
        d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000)); // Set cookie to expire in 7 days
        const expires = "expires=" + d.toUTCString();
        const decodedToken = jwtDecode(userToken);
        dispatch(initUser({
            username: decodedToken.sub.username,
            admin: decodedToken.sub.admin
        }))
        document.cookie = `token=${userToken};${expires};path=/`;
        setToken(userToken);
    }

    function removeToken() {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        dispatch(logoutUser());
        setToken(null);
    }

    return {
        setToken: saveToken,
        token,
        removeToken
    }

}

export default useToken;
