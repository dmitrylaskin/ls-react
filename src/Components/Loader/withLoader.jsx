import React, {Component} from 'react';
import {connect} from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

export const withLoader = (Component) => {
    let withLoaderContainer = (props) => {
        if (props.isLoading) {
            return <CircularProgress />
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
