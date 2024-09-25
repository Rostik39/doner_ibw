import { Link, useNavigate } from "react-router-dom";
import React from 'react';
import useFetch from "../../functions/useFetch";

const SignIn = (props) => {
    const navigate = useNavigate();
    const {data, error, isPending, fetchData} = useFetch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = {
            username: formData.get('username').trim(),
            password: formData.get('password').trim()
        };
        fetchData("/signIn", 
                    "POST",
                    {
                        body: userData,
                        doOnSuccess: (data)=>{
                            props.setToken(data.token);
                            document.cookie = `token=${data.token}; path=/`;
                            navigate('/menu');
                        },
                        doOnError:()=>e.target.reset()
                    }
                )
    }

    return (
        <div className="auth-box">
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input type="text" name="username" required/>
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input type="password" name="password" required/>
                    <label>Password</label>
                </div>
                <center>
                    <button type="submit" className='submit'>sign in<span></span></button>
                </center>
            </form>
            <div className="bottom-text">
                <Link className="bottom-link" to={'/signUp'}>sign up</Link>
            </div>
        </div>
    );
}
 
export default SignIn ;