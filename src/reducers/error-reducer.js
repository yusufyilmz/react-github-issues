
import * as actionTypes from '../constants/actionTypes';

const initialState = {
    error: false,
    errorMessage: ''
}

export default function (state = initialState, action) {
    switch (action.type) {

        case actionTypes.FETCH_ISSUES_ERROR:
            return {
                ...state,
                error: true,
                errorMessage: action.payload,
            }
        case actionTypes.RESET_ERROR:
            return {
                ...state,
                error: false,
                errorMessage: ''
            }
        default:
            return state;
    }

}