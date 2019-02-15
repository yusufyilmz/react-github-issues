
import * as actionTypes from '../constants/actionTypes';

const initialState = {
    organization: 'facebook', 
    repository: 'react',
    items: [],
    item: null,
    createSuccess: false,
    editSuccess: false,
    deleteSuccess: false,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {

        case actionTypes.FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                items: action.payload,
                // createSuccess: false,
                // editSuccess: false,
                // deleteSuccess: false,
                // loading: false
            }

        default:
            return state;
    }

}