import { useState } from "react";

export default function SearchBar({ onSearch }) {

   const [id, setId] = useState('');
   const handleChange = (event) => {
      setId(event.target.value);
   };

   return (
      <>
         <input type='search' placeholder="id..." onChange={handleChange} />
         <button onClick={() => onSearch(id)}>Agregar</button>
      </>
   );
}
