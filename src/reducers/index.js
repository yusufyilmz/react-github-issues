import { combineReducers } from 'redux'
import genre from './genre-reducer';
import error from './error-reducer';
import loader from './loader-reducer';


import issue from './issue-reducer';

const rootReducer = combineReducers({
    issue,
    loader
})

export default rootReducer
