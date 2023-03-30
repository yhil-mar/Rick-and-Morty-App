import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div>
            <Link to={'/home'}>
                <button>Atrás</button>
            </Link>
            <h1>Aquí va mi info</h1>
        </div>
    );
}