import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, SHOW_ALL } from './actions';

const initialState = {
    allCharacters: [],
    myFavorites: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_FAV:
        //     return {
        //         ...state,
        //         myFavorites: [...state.allCharacters, action.payload],
        //         allCharacters: [...state.allCharacters, action.payload]
        //     };
        case ADD_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            };
        // case REMOVE_FAV:
        //     return {
        //         ...state,
        //         myFavorites: state.myFavorites.filter(
        //             (char) => char.id !== Number(action.payload)
        //         ),
        //         allCharacters: state.allCharacters.filter(
        //             (char) => char.id !== Number(action.payload)
        //         )
        //     };
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            };
        case FILTER:
            return {
                ...state,
                myFavorites: state.allCharacters.filter(
                    char => char.gender === action.payload
                )
            }
        case ORDER:
            return {
                ...state,
                myFavorites: state.myFavorites.sort((a, b) => {
                    if (action.payload === 'A') return a.id - b.id;
                    else return b.id - a.id;
                }),
                allCharacters: state.allCharacters.sort((a, b) => {
                    if (action.payload === 'A') return a.id - b.id;
                    else return b.id - a.id;
                })
            }
        case SHOW_ALL:
            return {
                ...state,
                myFavorites: state.allCharacters
            }
        default:
            return { ...state };
    }
};

export default rootReducer;