import { API_URL } from '../../constants';

export const SET_BEERS = 'SET_BEERS';

export function getBeers() {
    return dispatch => {
        fetch(`${API_URL}/beers`)
            .then(res => res.json())
            //.then(res => res.results)
            .then(beers =>
            dispatch(setBeers(beers)));
    };
}

export function setBeers(beers) {
    return {
        type: SET_BEERS,
        beers
        //beers: beers
    };
}