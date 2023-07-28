// // import React, { useEffect } from "react";
// // import style from "../Cards/Cards.module.css";
// // import { useDispatch, useSelector } from "react-redux";
// // import Card from "../../components/Card/Card";
// // import {
// //   filterCards,
// //   getFavorites,
// //   orderCards,
// //   resetFavorites,
// // } from "../../redux/actions";
// // //import { motion } from "framer-motion";

// // const Favorites = ({idUser}) => {
// //   // const [guardados, setguardados] = useState([]);
// //   const { myFavorites } = useSelector((state) => state);
// //   const { allCharacters } = useSelector((state) => state);
// //   const dispatch = useDispatch();

// //   const handlerOrder = (event) => {
// //     //dispatch(orderCards(event.target.value));

// //   };
// //   const handlerFilter = (event) => {
// //     dispatch(filterCards(event.target.value));
// //   };

// //   useEffect(() => {
// //     dispatch(getFavorites(idUser));

// //         return () => {
// //       dispatch(resetFavorites());
// //     }
// //   }, []);

// //   return (
// //     <>
// //       <div className={style.divSelects}>
// //         <select onChange={handlerOrder} defaultValue="Order">
// //           <option disabled="disabled" value="Order">
// //             Order By
// //           </option>
// //           <option value="Ascendente">Ascendente</option>
// //           <option value="Descendente">Descendente</option>
// //         </select>
// //         <select onChange={handlerFilter} defaultValue="Filter">
// //           <option disabled="disabled" value="Filter">
// //             Filter By
// //           </option>
// //           <option value="Todos">Todos</option>
// //           <option value="Male">Male</option>
// //           <option value="Female">Female</option>
// //           <option value="Unknown">Unknown</option>
// //           <option value="Genderless">Genderless</option>
// //         </select>
// //       </div>
// //       <div className={style.divCards}>
// //         {myFavorites.map((char) => {
// //           return (
// //             <Card
// //               key={char.id}
// //               id={char.id}
// //               name={char.name}
// //               species={char.species}
// //               gender={char.gender}
// //               image={char.image}
// //               idUser={idUser}
// //             />
// //           );
// //         })}
// //       </div>
// //     </>
// //   );
// // };

// // export default Favorites;

import { useState } from "react";
import { ORDER, OrderCards, filterCards } from "../../redux/actions";
import Card from "../Card/Card";
import styles from "../Cards/Cards.module.css";
import { connect, useSelector, useDispatch } from "react-redux";

const Favorites = (props) => {
  const [aux, setAux] = useState(false);
  //const { myFavorites } = props;
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  console.log("favoritos", myFavorites);
  if (myFavorites.length == 0) {
    return <h2>No tienes favoritos</h2>;
  }

  // useEffect(() => {
  //   dispatch(getFavorites());

  //   return () => {
  //     dispatch(resetFavorites());
  //   };
  // }, []);

  const handleOrder = (event) => {
    setAux (!aux);
     dispatch (OrderCards(event.target.value))
  };

  const handleFilter = (e) => {
    dispatch (filterCards(e.target.value))
  };

  return (
    <div className={styles.divCards}>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      
      <select onChange={handleFilter}>
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      {myFavorites.map((personaje) => {
        const { key, id, name, status, species, gender, origin, image } =
          personaje;
        //console.log ('id en favorites',{id},{key});
        return (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            //origin={origin.name}
            origin={origin}
            image={image}
            myFavorites={myFavorites}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
