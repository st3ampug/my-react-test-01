import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { getBeers } from './reducer/beers/actions';
// import { getCharacters } from './reducer/characters/actions';

const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.dispatch(getBeers());
// store.dispatch(getCharacters());

require('./index.html');

// Create app
const container = document.querySelector('#app-container');

// Render app
ReactDOM.render( 
    <AppContainer >
        <Provider store={store}>
            <App />
        </Provider>
    </AppContainer>
    ,
    container
);

// Hot module reloading
if (module.hot) {
    module.hot.accept('./components/App', () => {
        ReactDOM.render(
        <AppContainer >
            <Provider store={store}>
                <App />
            </Provider>
        </AppContainer>
        ,
        container
        );
    });
}