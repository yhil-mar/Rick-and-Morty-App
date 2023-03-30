import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import './Card.css';

function Card({ id, name, species, gender, image, onClose, addFav, removeFav, allCharacters }) {
   const [isFav, setIsFav] = useState(false);
   const { pathname } = useLocation();

   useEffect(() => {
      allCharacters.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [allCharacters]);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id)  // cómo ya se mejoró la función "removeFav" ahora solamente se la debe ejecutar pasandole el id
      } else {
         setIsFav(true);
         addFav({ id, name, species, gender, image })    // esta igual, pero pasandole un objeto con lo que se necesitará del personaje
      }
   };

   return (
      <div id='card'>
         {
            isFav ? (
               <button className="favButton" onClick={handleFavorite}>❤️</button>
            ) : (
               <button className="favButton" onClick={handleFavorite}>🤍</button>
            )
         }
         {pathname === '/home' && <button id="closeButton" onClick={() => {
            onClose(id)
            removeFav(id)
         }
         }>❌</button>}
         <Link to={`/detail/${id}`}>
            <p><b>{name}</b></p>
         </Link>
         <p>{species}</p>
         <p>{gender}</p>
         <img src={image} alt='' height='250rem'/>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      allCharacters: state.allCharacters
   };
};

export const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character));
      },
      removeFav: (id) => {
         dispatch(removeFav(id));
      }
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
