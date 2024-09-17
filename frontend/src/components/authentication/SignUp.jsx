import { Link, useNavigate } from "react-router-dom";
import React from 'react';

const SignUp = () => {
    const url = "http://127.0.0.1:5000/signUp";
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = {
            username: formData.get('username').trim(),
            password: formData.get('password').trim(),
            confirmPassword: formData.get('confirmPassword').trim()
        };
        if (userData.password === userData.confirmPassword) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: userData.username,
                    password: userData.password
                })
            })
                .then(res => {
                    return res.json().then(data => {
                        if (!res.ok) {
                            throw new Error(data.message || 'Could not fetch the data for that resource');
                        }
                        return data;
                    });
                })
                .then((data) => {
                    alert(data.message);
                    navigate("/signIn");
                })
                .catch(err => {
                    alert(err.message);
                    e.target.reset();
                })
        } else {
            alert("Passwords do not match")
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