import BotonRandom from '../BotonRandom/BotonRandom';
import styles from './SearchBar.module.css'
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

export default function SearchBar({onSearch, length}) {
   const [id, setId] = useState(''); //defino el hook ID
   
   const handleChange = (event) => {
      console.log("hook",event.target.value);
      setId(event.target.value);
   }

   const handleAdd = () => {
      onSearch(id);
      setId('');
    };

     const handleRandom = () => {
      onSearch(Math.floor(Math.random() * length) + 1); //826 es la cantidad count en https://rickandmortyapi.com/api/character
      
    };
      // Handler para cuando se deja de presionar el botón
   const handleRelease = (e) => {
      e.target.style.transform = 'scale(1)'; // Volver a la escala original
   };

   return (
   <div className={styles.divBar}>
         <div className={styles.divRandom} onClick={handleRandom}><BotonRandom/></div>
         <input 
            placeholder="..."
            className={styles.inputBar} 
            type='search' 
            value={id} 
            onChange={handleChange} />
         <button className={styles.botonBar} onClick={handleAdd}> <FaPlus/> </button>
   </div>
   );
}
