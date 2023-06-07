import axios from 'axios';
export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS";

export function getAllCharacters() {
    return (dispatch) => {
      axios.get("http://localhost:3001/characters").then((response) => {
        dispatch({
          type: GET_ALL_CHARACTERS,
          payload: response.data,
        });
      });
    };
  }
