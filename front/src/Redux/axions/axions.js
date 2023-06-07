import axios from 'axios';
export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS";
export const GET_SEARCH_NAME = "GET_SEARCH_NAME";
export const GET_SEARCH_ID = "GET_SEARCH_ID";
export const SET_LOADING = "SET_LOADING";

export const setLoading = (isLoading) => {
  return{
      type: SET_LOADING,
      payload: isLoading
  };
};

export function getAllCharacters(page) {
    return (dispatch) => {
      dispatch(setLoading(true))
      axios.get(`http://localhost:3001/characters?${page}`).then((response) => {
        dispatch({
          type: GET_ALL_CHARACTERS,
          payload: response.data,
        })
        dispatch(setLoading(false))
      });
    };
}
export function getSearchId(id) {
    return (dispatch) => {
      dispatch(setLoading(true))
        axios.get(`http://localhost:3001/characters/${id}`)
        .then((response) => {
          dispatch({
            type: GET_SEARCH_ID,
            payload: response.data,
          });
          dispatch(setLoading(false))
        })
        .catch(error => {
          return(
            <h1>
              Character not found
            </h1>
          )
        })
    };
}
export function getSearchName(name) {
    return (dispatch) => {
      dispatch(setLoading(true))
      axios.get(`http://localhost:3001/characters?name=${name}`)
        .then((response) => {
        dispatch({
          type: GET_SEARCH_NAME,
          payload: response.data,
        });
        dispatch(setLoading(false))
      })
      .catch(error => console.log(error.message))
    };
}
