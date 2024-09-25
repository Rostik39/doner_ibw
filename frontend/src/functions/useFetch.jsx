import { useState, useCallback } from "react";

const useFetch = (token=null, setToken=null) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(
        (endOfUrl, method, options = {}) => {
          const { body = null, doOnSuccess = () => {}, doOnError = () => {} } = options;
          const abortCont = new AbortController();
          setIsPending(true);
          setError(null);
      
          fetch("http://127.0.0.1:5000/api" + endOfUrl, {
            method: method,
            headers: {
              Authorization: token ? `Bearer ${token}` : null,
              "Content-Type": "application/json",
            },
            body: body ? JSON.stringify(body) : null
          })
            .then((res) => {
              return res.json().then((data) => {
                if (!res.ok) {
                  if (res.status === 401) {
                    alert(data.error);
                    const buttonLogout = document.getElementById("logout");
                    buttonLogout.click();
                  }
                  throw Error(data.error);
                }
      
                const newToken = res.headers.get("New-Access-Token");
                newToken && setToken(newToken);
      
                return data;
              });
            })
            .then((data) => {
              setData(data);
              setIsPending(false);
              doOnSuccess(data);
            })
            .catch((err) => {
              if (err.name === "AbortError") {
                console.log("fetch aborted");
              } else {
                setError(err.message);
                doOnError();
                setIsPending(false);
              }
            });
      
          return () => abortCont.abort();
        },
        [token, setToken]
    );

    return {data, isPending, error, fetchData};
}

export default useFetch