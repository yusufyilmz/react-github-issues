
import * as actionTypes from '../constants/actionTypes';

const initialState = {
    loading: false,
}

export default function (state = initialState, action) {
    switch (action.type) {

        case actionTypes.LOADING_ISSUES_SUCCESS:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_ISSUES_SUCCESS:
        case actionTypes.SORT_ISSUES_SUCCESS:
        case actionTypes.FETCH_ISSUES_ERROR:
        case actionTypes.FETCH_SINGLE_ISSUE_SUCCESS:
        case actionTypes.FILTER_ISSUES_SUCCESS:
            return {
                ...state,
                loading: false,
            }

        default:
            return state;
    }

}