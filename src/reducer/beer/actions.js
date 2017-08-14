import { API_URL } from '../../constants';

export const SET_CURRENT_BEER = 'SET_CURRENT_BEER';
export const SET_BEER_PROFILE = 'SET_BEER_PROFILE';

export function setCurrentBeer(id) {
    return {
        type: SET_CURRENT_BEER,
        id
    };
}

export function getBeerProfile(id) {
    return dispatch => 
        fetch(`${API_URL}/beers/${id}`)
            .then(res => res.json())
            .then(res => res[0])
            .then(profile => {
                dispatch(setBeerProfile(profile))
            });
}

export function setBeerProfile(profile) {
    return {
        type: SET_BEER_PROFILE,
        profile
    };
}