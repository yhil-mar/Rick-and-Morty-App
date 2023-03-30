export const ADD_FAV = 'ADD_FAV', REMOVE_FAV = 'REMOVE_FAV', FILTER = 'FILTER', ORDER = 'ORDER', SHOW_ALL = 'SHOW_ALL';

export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character
    }
};

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
};

export const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden
    }
};

export const showAll = () => {
    return {
        type: SHOW_ALL
    }
};