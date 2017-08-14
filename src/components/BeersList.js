import React from 'react';
import { connect } from 'react-redux';
import { 
    setCurrentBeer,
    getBeerProfile
} from '../reducer/beer/actions'

const BeerList = ({ beers, setBeer }) => 
    <div id="beer-list" className="col-md-6">
        <h1>Beers</h1>
        <ul>
            {beers.map(b =>
                <li id={b.id} key={b.id} onClick={setBeer(b.id)}>
                    {b.name}
                </li>
            )}
        </ul>
    </div>

const mapStateToProps = ({ beers }) => ({
    beers
});

const mapDispatchToProps = dispatch => ({
    setBeer(id) {
        return () => {
            dispatch(setCurrentBeer(id));
            dispatch(getBeerProfile(id));
        };
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerList);