import React, {Component} from 'react';
import {connect} from "react-redux";

export const withLoader = (Component) => {
    let withLoaderContainer = (props) => {
        if (props.isLoading) {
            return <div style={{fontSize: '23px'}}>Loading...</div>
        }
        return <Component {...props}/>
    }
    return connect(mapStateToProps)(withLoaderContainer)
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.auth.isLoading
    }
}

export default withLoader
