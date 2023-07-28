import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import Details from './components/Details/Details.jsx';
import About from './components/About/About.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom'
import Form from './components/Form/Form';
import Favorites from './components/Favorites/'

function App() {

   const location = useLocation();
   //defini el estilo inline para practicar ya que no necesitaba darle muchas reglas
   const AppStyle = {
      height: `100vh`,
      width: `100%`,
    //  position: ,
      top: `0`,
      left: `0`,
      right: `0`,
      bottom: `0`,
      //background: `linear-gradient(to bottom right, #000000, #000040, #000020)`,
      backgroundImage: 'url("https://wallpapercave.com/wp/wp7227842.jpg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      // 'overflow-y': 'scroll'
   };
   const navigate = useNavigate();
   const [access,setAccess] = useState(false);
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

  async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         
            const { access } = data;
            setAccess(access);
            access && navigate('/home');
         
         
      } catch (error) {
         window.alert(error.menssage)
      }
   }

   function logout() {
      setAccess(false);
      navigate('/');
   }
   const [characters, setCharacters] = useState([]); //defino el hook characters
   
   function onClose(id) {
      console.log("en onClose");
      const filteredCharacters = characters.filter((card) => card.id !== id);
      setCharacters(filteredCharacters);
   }
   

   async function onSearch(id) {
      let repetido = false;
      characters.forEach(element => {
         if (element.id === id) {
            repetido = true;
         }
      });
      if (repetido) {
         window.alert('¡personaje repetido!');
         return;
      }
      if (!/^(?:[1-9]\d{0,2}|826)$/.test(id)) {
         window.alert('¡no hay personajes con ese ID!');
         return;
      }

      try {
         //const urlNube = `https://rickandmortyapi.com/api/character/${id}`;
         const urlServerPropio = `http://localhost:3001/rickandmorty/character/${id}`;
         let resp = await axios(urlServerPropio);
         
         const { data } = resp;
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
      } catch (error) {
         console.log("Error intentando obtener datos");
      }
   }
   const visible = location.pathname == "/" ? 'noVisible' : 'visible';
   
   return (
    <div className='App' style={AppStyle}>
      <Nav className="NAV" logout={logout} onSearch={onSearch} length={826} visible={visible}></Nav>
      <Routes>
         {/* <Route path="/" element= <Cards characters={characters} onClose={onClose}/> /> */}
         <Route path="/" element= <Form login= {login}/> />
         <Route path="/favorites" element= <Favorites/> />
         <Route path="/about" element= <About/> />
         <Route path="/home" element= <Cards characters={characters} onClose={onClose}/> />
         <Route path="/details/:id" element=<Details/> />
      </Routes>
  </div>
   );
}

export default App;

// import './App.css';
// import Cards from './components/Cards/Cards.jsx';
// import Nav from './components/Nav/Nav.jsx';
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
// import About from './components/About/About';
// import Detail from './components/Details/Details';
// //import Error from './components/Error/Error';
// import Form from './components/Form/Form';
// import Favorites from './components/Favorites/index.jsx';

// function App() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [access, setAccess] = useState(false);
//   const [characters, setCharacters] = useState([]);

//   useEffect(() => {
//     !access && navigate('/');
//   }, [access]);

//   const URL = 'http://localhost:3001/rickandmorty/';

//   async function login(userData) {
//     const { email, password } = userData;

//     try {
//       const { data } = await axios(
//         `${URL}login?email=${email}&password=${password}`
//       );

//       const { access } = data;

//       setAccess(access);

//       access && navigate('/home');
      
//     } catch (error) {
//       window.alert(error.message);
//     }
//   }

//   function logout() {
//     setAccess(false);
//     navigate('/');
//   }

//   async function onSearch(id) {
//     try {
//       const { data } = await axios(
//         `http://localhost:3001/rickandmorty/character/${id}`
//       );
//       if (data.name) {
//         setCharacters((oldChars) => [...oldChars, data]);
//       }
//     } catch (error) {
//       window.alert(error.message);
//     }
//   }

//   function onClose(id) {
//     const newCharacters = characters.filter(
//       (character) => character.id !== Number(id)
//     );

//     setCharacters(newCharacters);
//   }

//   return (
//     <div className='App'>
//       {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout} />}
//       <Routes>
//         <Route path='/' element={<Form login={login} />} />
//         <Route
//           path='/home'
//           element={<Cards characters={characters} onClose={onClose} />}
//         />
//         <Route path='/about' element={<About />} />
//         <Route path='/favorites' element={<Favorites />} />
//         <Route path='/detail/:id' element={<Detail />} />
//         {//<Route path='*' element={<Error />} />
//         }
//       </Routes>
//     </div>
//   );
// }

// export default App;
