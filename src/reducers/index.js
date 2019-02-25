import { combineReducers } from 'redux'
import error from './error-reducer';
import loader from './loader-reducer';


import issue from './issue-reducer';

const rootReducer = combineReducers({
    issue,
    loader,
    error
})

export default rootReducer
