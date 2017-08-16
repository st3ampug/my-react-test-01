import { API_URL } from '../../constants';

export const SET_CURRENT_BEER = 'SET_CURRENT_BEER';
export const SET_BEER_PROFILE = 'SET_BEER_PROFILE';
export const SET_YEAST_BROTHERS = 'SET_YEAST_BROTHERS';

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
            .then(profile => {
                dispatch(setBeerProfile(profile));
                dispatch(getBeerYeastBrothers(`${API_URL}${profile.patron_url_extension}`));
            });
}
//dispatch(setBeerYeastBrothers(`${API_URL}/beers?yeast=${profile.ingredients.yeast}`));

export function setBeerProfile(profile) {
    return {
        type: SET_BEER_PROFILE,
        profile
    };
}

export function getBeerYeastBrothers(url) {
    console.log("getBeerYeastBrothers: url: " + url);
    return dispatch =>
        fetch(url)
            .then(res => res.json())
            .then(ybeers => 
            dispatch(setBeerYeastBrothers(ybeers))
        );
}

export function setBeerYeastBrothers(ybeers) {
    console.log("setBeerYeastBrothers: ybeers: " + JSON.stringify(ybeers));
    return {
        type: SET_YEAST_BROTHERS,
        ybeers
    };
}