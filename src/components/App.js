import React from 'react';
import BeersList from './BeersList';
import BeerProfile from './BeerProfile';

const App = () =>
    <div className='container'>
        <div className='row'>
            <BeersList />
            <BeerProfile />
        </div>
    </div>;
    

export default App;