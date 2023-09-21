import {combineReducers} from 'redux'
import userReducer from './reducers/userReducer';
import questionsReducer from './reducers/questionsReducer';

const rootReducer = combineReducers({
    userReducer,
    questionsReducer
});

export default rootReducer