import Card from '../Card/Card.jsx';
import styles from './Cards.module.css';

export default function Cards(props) {

const { characters, onClose} = props;


return (
   <div className={styles.divCards}>
   {characters.map((personaje) => {
      const {
         
         id,
         name,
         status,
         species,
         gender,
         origin,
         image
      } = personaje;
         return (
            <Card
               key={id}
               id={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               origin={origin.name}
               image={image}
               onClose={onClose}
               
            />
         )
      })}

   </div>
   );

   
}