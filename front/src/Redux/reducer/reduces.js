import { GET_ALL_CHARACTERS } from '../axions/axions'

const storeCharacters = {
    allCharacters: [],
    loading: false
}

const rootReducer = (state = storeCharacters, { type, payload }) => {
    switch (type) {
        case GET_ALL_CHARACTERS:
            return{
                ...state,
                allCharacters : payload
            }
        default:
            return { ...state };
    }
}

export default rootReducer;