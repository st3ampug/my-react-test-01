import { combineReducers } from 'redux';
import id from './id';
import profile from './profile';
import ybeers from './ybeers';

export default combineReducers({
    id,
    profile,
    ybeers
});