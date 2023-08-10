
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

  const handleOrder = (event) => {
    setAux (!aux);
     dispatch (OrderCards(event.target.value))
  };

  const handleFilter = (e) => {
    dispatch (filterCards(e.target.value))
  };

  return (
  <div>
    <div className={styles.filterBar}>
     <h2>Order</h2>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      
      <h2>Filter</h2>
      <select onChange={handleFilter}>
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
    </div>
    <div className={styles.divCards}>
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
  </div>
  );
};

export default Favorites;
