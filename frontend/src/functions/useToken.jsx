import { useState } from 'react';

function useToken() {

  function getToken() {
    const name = 'token=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return null;
  }

  const [token, setToken] = useState(getToken());

  function saveToken(userToken) {
    const d = new Date();
    d.setTime(d.getTime() + (7*24*60*60*1000)); // Set cookie to expire in 7 days
    const expires = "expires=" + d.toUTCString();
    document.cookie = `token=${userToken};${expires};path=/`;
    setToken(userToken);
  }

  function removeToken() {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setToken(null);
  }

  return {
    setToken: saveToken,
    token,
    removeToken
  }

}

export default useToken;
