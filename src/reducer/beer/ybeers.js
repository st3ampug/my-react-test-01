import { SET_YEAST_BROTHERS } from "./actions";

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_YEAST_BROTHERS:
            return action.ybeers;
        default:
            return state;
    }
}