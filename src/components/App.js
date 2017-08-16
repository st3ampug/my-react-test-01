import React from 'react';
import BeersList from './BeersList';
import BeerProfile from './BeerProfile';
import BeerYeastBrothers from './BeerYeastBrothers';

const App = () =>
    <div className='container'>
        <div className='row'>
            <BeersList />
            <BeerProfile />
        </div>
        <div className='row'>
            <BeerYeastBrothers />
        </div>
    </div>;
    

export default App;