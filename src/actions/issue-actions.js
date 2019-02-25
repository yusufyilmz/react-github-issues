import * as actionTypes from '../constants/actionTypes';
import GithubAPI from '../api/githubAPI';
import { GITHUB_ORGANIZATION, GITHUB_REPO } from '../constants/props';

const fetchIssuesError = (data) => {
    return {
        type: actionTypes.FETCH_ISSUES_ERROR,
        payload: data
    }
}

const fetchIssuesSuccess = (data) => {
    return {
        type: actionTypes.FETCH_ISSUES_SUCCESS,
        payload: data
    }
}

const resetIssueQuery = (data) => {
    return {
        type: actionTypes.RESET_ISSUE_QUERY,
        payload: data
    }
}


const filterIssuesSuccess = (data) => {
    return {
        type: actionTypes.FILTER_ISSUES_SUCCESS,
        payload: data
    }
}


const fetchSingleIssueSuccess = (data) => {
    return {
        type: actionTypes.FETCH_SINGLE_ISSUE_SUCCESS,
        payload: data
    }
}


const sortIssuesSuccess = (data) => {
    return {
        type: actionTypes.SORT_ISSUES_SUCCESS,
        payload: data
    }
}


const loadingSuccess = () => {
    return {
        type: actionTypes.LOADING_ISSUES_SUCCESS,
    }
}


export const backToIssuePage = () => async (dispatch, getState) => {

    dispatch({
        type: actionTypes.BACK_TO_ISSUE_PAGE,
    })
}

export const fetchIssues = (pageCount) => async (dispatch, getState) => {

    dispatch(loadingSuccess());
    let query;

    if(pageCount) {
        query = getState().issue.query;
    }
    else { 
        pageCount = 1;
        dispatch(resetIssueQuery());
    }

    const response = await GithubAPI.fetchIssues(GITHUB_ORGANIZATION, GITHUB_REPO, pageCount, query);
    if (response.data) {
        return dispatch(fetchIssuesSuccess(response))
    }

    dispatch(fetchIssuesError(response.message))
}

export const fetchSingleIssue = (issueNumber) => async (dispatch, getState) => {

    dispatch(loadingSuccess())

    const response = await GithubAPI.fetchSingeIssue(GITHUB_ORGANIZATION, GITHUB_REPO, issueNumber);
    if (response.data) {
        return dispatch(fetchSingleIssueSuccess(response))
    }

    dispatch(fetchIssuesError(response.message))
}


export const sortIssues = (type, direction) => async (dispatch, getState) => {

    dispatch(loadingSuccess())
    const response = await GithubAPI.sortIssues(type, direction, GITHUB_ORGANIZATION, GITHUB_REPO);
    if (response.data) {
        return dispatch(sortIssuesSuccess(response))
    }

    dispatch(fetchIssuesError(response.message))
}


export const filterIssues = (keyword) => async (dispatch, getState) => {

    const loweredKeyword = keyword.toLowerCase();
    const filteredItems = getState().issue.initialItems.filter(x => x.title.toLowerCase().indexOf(loweredKeyword) !== -1)
    dispatch(filterIssuesSuccess(filteredItems))
}

