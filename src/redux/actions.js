import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

// // ACTION | addFav
// export const addFav = (character) => {
//   const endpoint = 'http://localhost:3001/rickandmorty/fav';
//   return async (dispatch) => {
//     try {
//       const {data} = await axios.post(endpoint, character);
//       return dispatch({
//            type: 'ADD_FAV',
//            payload: data
//       });
//     } catch (error) {
//           window.alert(error.message);
//     }
// };
// };


// // ACTION | removeFav
// export const removeFav = (id) => {
//   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//   return async (dispatch) => {
//      try {
//       const {data} = await axios.delete(endpoint);
//         return dispatch({
//            type: 'REMOVE_FAV',
//            payload: data
//         });
//      } catch (error) {
//       window.alert(error.message);
//      }
     
//   };
// };

//   export const filterCards= (gender) => {
//     return {
//       type: FILTER,
//       payload: gender,
//     }
//   }
//   export const OrderCards= (name) => {
//     return {
//       type: ORDER,
//       payload: name,
//     }
//   }



export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const FILTER_CARDS = "FILTER_CARDS";
export const ORDER_CARDS = "ORDER_CARDS";
export const RESET_FAVORITES = "RESET_FAVORITES";
export const GET_FAVORITES = "GET_FAVORITES";
const URL = 'http://localhost:3001/rickandmorty/fav';

export const addFav = (character) => {
  
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${URL}`, character);

      return dispatch({
        type: 'ADD_FAV',
        payload: data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

export const removeFav = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${URL}/${id}`);

      return dispatch({
        type: 'REMOVE_FAV',
        payload: data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

// export const getFavorites = (id) => {
//   return async function (dispatch) {
//     console.log("id fav",id);
//     const response = await axios.get(`/rickandmorty/userfavs/${id}`);
//     dispatch({ type: GET_FAVORITES, payload: response.data });
//   };
// };


export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

// export const orderCards = (id) => {
//   return { type: ORDER_CARDS, payload: id };
// };
  export const OrderCards= (name) => {
    return {
      type: ORDER,
      payload: name,
    }
  }

export const resetFavorites = () => {
  return { type: RESET_FAVORITES };
};


