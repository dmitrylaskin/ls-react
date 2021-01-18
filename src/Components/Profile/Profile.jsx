import React from 'react';
import PropTypes from 'prop-types'

const Profile = (props) => {
    return (
        <div>{props.text}</div>
    );
};

Profile.propTypes = {
    text: PropTypes.string
}

export default Profile;
