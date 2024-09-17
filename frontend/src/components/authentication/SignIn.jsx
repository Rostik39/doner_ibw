import { Link, useNavigate } from "react-router-dom";
import React from 'react';

const SignIn = (props) => {
    const url = "http://127.0.0.1:5000/signIn";
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = {
            username: formData.get('username').trim(),
            password: formData.get('password').trim()
        };
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
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
                props.setToken(data.token);
                document.cookie = `token=${data.token}; path=/`;
                navigate('/menu');
            })
            .catch(err => {
                alert(err.message);
                e.target.reset();
            })
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