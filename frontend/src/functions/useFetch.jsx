import { useState, useEffect } from "react";

const useFetch = (url, token, setToken) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url,{
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(res => {
                if(!res.ok){
                    if (res.status === 401){
                        alert("Session has expired");
                        const buttonLogout = document.getElementById("logout");
                        buttonLogout.click();
                    }
                    throw Error('could not fetch the data for that resource');
                }
                const newToken = res.headers.get('New-Access-Token');
                newToken && setToken(newToken);

                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
            })
            .catch(err => {
                if (err.name === 'AbortError'){
                    console.log('fetch aborted');
                }
                setIsPending(false);
                setError(err.message);
            })

        return () => abortCont.abort();

    }, [url, token, setToken]);

    return {data, isPending, error};
}

export default useFetch