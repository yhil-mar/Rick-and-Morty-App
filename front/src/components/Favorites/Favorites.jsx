import './Favorites.css'
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { filterCards, orderCards, showAll } from '../../redux/actions';
import { useDispatch } from 'react-redux';

export default function Favorites() {
    const [aux, setAux] = useState(false);
    // const allCharacters = useSelector((state) => state.allCharacters);
    const myFavorites = useSelector((state) => state.myFavorites);
    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    };
    const handleFilter = (event) => {
        if (event.target.value === 'allChar') {
            dispatch(showAll());
        } else {
            dispatch(filterCards(event.target.value));
        }
    };
    const backOrganizer = () => {
        dispatch(showAll());
        dispatch(orderCards('A'));
    }

    return (
        <div>
            <Link to={'/home'}>
                <button onClick={() => backOrganizer()}>Atrás</button>
            </Link>
            <h3>Personajes favoritos</h3> <br />
            <select name='orderSelect' onChange={handleOrder}>
                <option value='A'>Ascendente</option>
                <option value='D'>Descendente</option>
            </select>
            <select name='filterSelect' onChange={handleFilter}>
                <option value='allChar'>All characters</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Genderless'>Genderless</option>
                <option value='unknown'>Unknown</option>
            </select>
            <div id='favContainer'>
                {myFavorites.map(({ id, name, species, gender, image }) => {
                    return (<Card
                        key={id}
                        id={id}
                        name={name}
                        species={species}
                        gender={gender}
                        image={image}
                    />
                    );
                })}
            </div>
        </div>
    );
}