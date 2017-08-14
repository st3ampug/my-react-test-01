import { SET_BEERS } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_BEERS:
            return action.beers;
        default:
            return state;
    }
};