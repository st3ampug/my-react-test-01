import { combineReducers } from 'redux';
import beers from './beers';
import beer from './beer';

export default combineReducers({
    beers,
    beer
});

// import { combineReducers } from 'redux';
// import characters from './characters';

// export default combineReducers({
//   characters,
// });