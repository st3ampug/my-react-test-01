import React from 'react';
import { connect } from 'react-redux';

const BeerProfile = ({ profile }) => 
    <div id='beer-profile' className='col-md-6'>
        <h1>Beer Profile</h1>
        {profile.name && <p>Name: {profile.name}</p>}
        {profile.tagline && <p>Tagline: {profile.tagline}</p>}
        {profile.first_brewed && <p>First Brewed: {profile.first_brewed}</p>}
        {profile.description && <p>Description: {profile.description}</p>}
        {profile.image_url && <img height='250' src={profile.image_url} />}
    </div>;

const mapStateToProps = ({ beer: { profile } }) => ({
    profile
});

export default connect(mapStateToProps)(BeerProfile);