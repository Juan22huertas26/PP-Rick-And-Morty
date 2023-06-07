import { GET_ALL_CHARACTERS, GET_SEARCH_ID, GET_SEARCH_NAME, SET_LOADING } from '../axions/axions'

const storeCharacters = {
    allCharacters: [],
    loading: false
}

const rootReducer = (state = storeCharacters, { type, payload }) => {
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                loading: payload
            };
        case GET_ALL_CHARACTERS:
            return{
                ...state,
                allCharacters : payload
            };
        case GET_SEARCH_ID:
            return{
                ...state, 
                allCharacters : payload
            };
        case GET_SEARCH_NAME:
            return{
                ...state,
                allCharacters : payload
            };
        default:
            return { ...state };
    }
}

export default rootReducer;