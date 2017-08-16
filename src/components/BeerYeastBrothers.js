import React from 'react';
import { connect } from 'react-redux';

const BeerYeastBrothers = ({ ybeers }) =>
    <div id="beer-yeast-broters-list" className="col-md-6">
        <h1>Yeast Brothers</h1>
        {ybeers && <p>Name: {ybeers.name}</p>}
    </div>

const mapStateToProps = ({ ybeers }) => ({
    ybeers
});

export default connect(mapStateToProps)(BeerYeastBrothers);