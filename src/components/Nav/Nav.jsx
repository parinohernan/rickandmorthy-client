import React from 'react';
import { Link , useLocation} from 'react-router-dom';
import { ImExit } from 'react-icons/im';
import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from './Nav.module.css'; // Asegúrate de importar los estilos CSS con 'styles'

export default function Nav({ onSearch, length, visible, logout }) {
const direction = useLocation().pathname;
  if (visible === 'visible') {
    return (
   <nav>
      <div className={styles.divNav}> 
        <Link to="/home">
          <button>HOME</button>
        </Link>
        <Link to="/favorites">
          <button>FAVORITES</button>
        </Link>
        <Link to="/about">
          <button>ABOUT</button>
        </Link>
        <Link to="/">
          <button onClick={logout} className={styles['exit-button']}> 
            <ImExit />
          </button>
        </Link>
   </div>
   
   <div className={styles.searchBar}>
        
        {direction == "/home" && (
           <SearchBar onSearch={onSearch} length={length} />
         )} 
        
   </div>
   </nav>
    );
  }
  return <div></div>;
}
