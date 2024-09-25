import { Link, useNavigate } from "react-router-dom";
import React from 'react';
import useFetch from "../../functions/useFetch";

const SignUp = () => {
    const navigate = useNavigate();
    const {data, isPending, error, fetchData} = useFetch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = {
            username: formData.get('username').trim(),
            password: formData.get('password').trim(),
            confirmPassword: formData.get('confirmPassword').trim()
        };
        if (userData.password === userData.confirmPassword) {
            fetchData('/signUp', 
                "POST", 
                {
                    body: {
                        username: userData.username,
                        password: userData.password
                    },
                    doOnSuccess: (data) => {
                       alert(data.message);
                       navigate("/signIn");
                    },
                    doOnError: () => e.target.reset()
                })
        } else {
            alert("Passwords do not match");
            e.target.reset();
        }
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
                <div className="user-box">
                    <input type="password" name="confirmPassword" required/>
                    <label>Confirm Password</label>
                </div>
                <center>
                    <button type="submit" className='submit'>sign up<span></span></button>
                </center>
            </form>
            <div className="bottom-text">
                <Link className="bottom-link" to={'/signIn'}>sign in</Link>
            </div>
        </div>
    );
}
 
export default SignUp ;