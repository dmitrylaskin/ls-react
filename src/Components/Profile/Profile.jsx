import React from 'react';
import PropTypes from 'prop-types'
import {withAuth} from "../HOCs/withAuth";

const Profile = (props) => {

    const signOutHandler = () => {
        props.logOut()
        props.navigateTo('home')
    }

    return (
        <div>Profile page
            <button onClick={signOutHandler}>Sign out</button>
        </div>
    );
};

Profile.propTypes = {
    text: PropTypes.string,
}
//export const ProfileWithAuth = withAuth(Profile) - video workshop#2;
export default withAuth(Profile);
