import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Deatil() {
    const [character, setCharacter] = useState({});
    const { id } = useParams();     // useParams es un objeto que se crea al pasar parámetros en el path de /detail con los dos puntos ":", se hace destructuring ya que le dimos el nombre "id" al parámetro

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    return (
        <div>
            <Link to={'/home'}>
                <button>Atrás</button>
            </Link>
            {character.name ? (                                 // Primero se pregunta por algo con "?", y si se cumple se renderiza algo más
                <div>
                    <h2>{character.name}</h2>
                    <img src={character.image} alt='' />
                    <h4>Status | {character.status}</h4>
                    <h4>Gender | {character.gender}</h4>
                    <h4>Specie | {character.species}</h4>
                    <h4>Origin | {character.origin}</h4>  {/* Para propiedades dentro de otras, se debe preguntar si esa información exíste con "?", sino lanzará error */}
                </div>
            ) : (                                               // Si no se cumple se utiliza los dos puntos ":", y se renderiza algo más
                <h4>Loading...</h4>
            )}                                                  {/* Todo esto debe ir dentro de llaves y paréntesis por cada situación, si se cumple o no */}
        </div>
    );
}