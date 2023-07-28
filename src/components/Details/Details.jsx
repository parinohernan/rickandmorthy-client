import Styles from "./Details.module.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Details () {
   
   
   const [character, setCharacter] = useState ({});

   const { id } = useParams();
   //console.log(id,`https://rickandmortyapi.com/api/character/${id}`);
   
   useEffect(() => {
    const urlNube = `https://rickandmortyapi.com/api/character/${id}`;
    const urlServerPropio = `http://localhost:3001/rickandmorty/character/${id}`;
       axios(urlServerPropio).then(({ data }) => {
          if (data.name) {
             setCharacter(data);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
       return setCharacter({});
    }, [id]);


   return (
      <div className={Styles.div}>
        <div className={Styles.fichaContainer}>
          <div className={Styles.imageContainer}>
            <img className={Styles.img} src={character.image} alt='Perfil' />
          </div>
          <div className={Styles.textContainer}>
            {character.name && (
            <div className="info">
              <h3>status: {character.status}</h3>
              <h3>name: {character.name}</h3>
              <h3>species: {character.species}</h3>
              <h3>gender: {character.gender}</h3>
              <h3>origin: {character.origin}</h3>
              
            </div>
            )}
          </div>
        </div>
      </div>
    );
     
}