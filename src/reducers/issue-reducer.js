
import * as actionTypes from '../constants/actionTypes';

const initialState = {
    items: [],
    item: null,
    pageCount: 0,
    query: ''
}

export default function (state = initialState, action) {
    switch (action.type) {

        case actionTypes.FETCH_ISSUES_SUCCESS:
            return {
                ...state,
                initialItems: action.payload.data,
                items: action.payload.data,
                pageCount: action.payload.pageCount,
            }

        case actionTypes.RESET_ISSUE_QUERY:
            return {
                ...state,
                query: ''
            }
        case actionTypes.FILTER_ISSUES_SUCCESS:
            return {
                ...state,
                items: action.payload,
            }
        case actionTypes.FETCH_SINGLE_ISSUE_SUCCESS:

            return {
                ...state,
                item: action.payload.data,
            }
        case actionTypes.BACK_TO_ISSUE_PAGE:
            return {
                ...state,
                item: null,
            }
        case actionTypes.SORT_ISSUES_SUCCESS:
            return {
                ...state,
                items: action.payload.data,
                pageCount: action.payload.pageCount,
                query: action.payload.query
            }
        default:
            return state;
    }

}