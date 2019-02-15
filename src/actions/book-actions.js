import * as actionTypes from '../constants/actionTypes';
import GithubAPI from '../api/githubAPI';

const errorOccured = (error) => {
    return {
        type: actionTypes.ERROR_OCCURED,
        payload: error
    }
}

const fetchIssuesError = (data) => {
    return {
        type: actionTypes.FETCH_BOOKS_SUCCESS,
        payload: data
    }
}


const fetchIssuesSuccess = (data) => {
    return {
        type: actionTypes.FETCH_BOOKS_SUCCESS,
        payload: data
    }
}

const loadingSuccess = () => {
    return {
        type: actionTypes.LOADING_BOOK_SUCCESS,
    }
}

export const fetchIssues = () => async (dispatch, getState) => {

    dispatch(loadingSuccess())

    const response = await GithubAPI.fetchIssues('facebook', 'react');

    if (response.status === 200) {
        return dispatch(fetchIssuesSuccess(response.data))
    }

    dispatch(fetchIssuesError(response.message))
}