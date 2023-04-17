import React, { useEffect, useState } from "react";
import validation from "../../validation";
import style from './Form.module.css';

export default function Form({ login }) {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });
    const [visButton, setVisButton] = useState(false);

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setUserData({ ...userData, [property]: value });
        setErrors(
            validation({ ...userData, [property]: value }, 'errors')
        );
        setVisButton(
            validation({ ...userData, [property]: value })
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    };

    return (
        <div className={style.formContainer}>
            <h2>¡Bienvenido!</h2>
            <hr />
            <form>
                <label htmlFor="email">Email</label> <br />
                <input
                    className="input"
                    name='email'
                    placeholder="Email"
                    value={userData.email}
                    onChange={handleChange} />
                <br />
                <span className={style.warning}> {errors.email}</span>
                <br />

                <label htmlFor="password">Password</label> <br />
                <input
                    className="input"
                    name='password'
                    type='password'
                    placeholder="Password"
                    value={userData.password}
                    onChange={handleChange} />
                <br />
                <span className={style.warning}> {errors.password}</span>
                <br />

                <button className={style.loginButton} disabled={!visButton} onClick={handleSubmit}>Login</button>

            </form>
        </div>
    );
}