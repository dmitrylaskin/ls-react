import React from 'react';
import PropTypes from 'prop-types'
import {MyContext} from "../../App";


class About extends React.Component {
    static propTypes = {
        text: PropTypes.string
    }
    render() {

        return (
            <MyContext.Consumer>
                {(logObj) => {
                    <div>{logObj.logIn()}</div>
                }}
            </MyContext.Consumer>

        );
    }
}



export default About;
