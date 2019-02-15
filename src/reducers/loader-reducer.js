
import * as actionTypes from '../constants/actionTypes';

const initialState = {
    loading: false,
}

export default function (state = initialState, action) {
    switch (action.type) {

        case actionTypes.LOADING_BOOK_SUCCESS:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_BOOKS_SUCCESS:
        
            return {
                ...state,
                loading: false,
            }

        default:
            return state;
    }

}