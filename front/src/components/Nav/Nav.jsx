import style from './Nav.module.css';
import React from "react";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";

export default function Nav({ onSearch, logout }) {
    const handleSubmit = () => {
        const validar = window.confirm('Está seguro de cerrar sesión?');
        if (validar) logout();
    };

    return (
        <div className={style.navBar}>
            <Link to={'/about'}>
                <button id='about'>About</button>
            </Link>
            {/* <Link to={'/home'}>
                <button>Home</button>
            </Link> */}
            <Link to={'/favorites'}>
                <button id='favorites'>Favorites</button>
            </Link>
            <SearchBar onSearch={onSearch} />
            <button id='logout' onClick={handleSubmit}>Log-out</button>
        </div>
    );
}