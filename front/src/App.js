import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Deatil from './components/Deatil/Deatil';
import Favorites from './components/Favorites/Favorites';
import Form from './components/Form/Form';

function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();

   const EMAIL = 'minicatz@gmail.com';
   const PASSWORD = 'm1bebef1u';

   const onSearch = (id) => {
      if (id === '') alert('¡Debes llenar este campo!');
      else if (id > 826 || !Number(id)) alert('¡No hay personajes con este ID!');
      else axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name && !characters.find(char => char.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡Personaje repetido!');
         }
      });
   };
   const onClose = (id) => {
      setCharacters(characters.filter(character => character.id !== id));
   };

   // const login = (userData) => {
   //    if (userData.email === EMAIL && userData.password === PASSWORD) {
   //       setAccess(true);
   //       navigate('/home');
   //    } else alert('Email o Password incorrectos');
   // };

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   };

   const logout = () => {
      setAccess(false);
      navigate('/');
   };

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
         {location.pathname === '/home' && <Nav onSearch={onSearch} logout={logout} />}
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/home' element={
               <Cards
                  characters={characters}
                  onClose={onClose}
               />
            } />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Deatil />} />
         </Routes>
      </div>
   );
}

export default App;
