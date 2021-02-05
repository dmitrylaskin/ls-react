import React from 'react';
import mapboxgl from 'mapbox-gl';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getCardName, getIsLoggedIn} from "../Redux/map-selector";
import classes from './Map.module.css'
import DestinationForm from "../DestinationForm/DestinationForm";


class Map extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()
        this.map = null
    }


    componentDidMount() {

            mapboxgl.accessToken = 'pk.eyJ1Ijoid2V2IiwiYSI6ImNrazJkOHgyNTEwZmwybm81cnhveGg1bG4ifQ.p_mRS1GjQSlWlB2FeH0Q4Q';
            this.map = new mapboxgl.Map({
                container: this.myRef.current,
                style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
                center: [30.32, 59.93], // starting position [lng, lat]
                zoom: 10 // starting zoom
            });

    }
    componentWillUnmount() {
        this.map.remove()
    }


    render() {

        return (
            !this.props.isLoggedIn ? <Redirect to={'home'}/> :
            <div className={classes.wrapper}>
                <div className={classes.map} data-testid='map' ref={this.myRef}>
                    {this.props.cardName && <DestinationForm/>}
                </div>
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    console.log('home mstp')
    return  {
        isLoggedIn: getIsLoggedIn(state),
        cardName: getCardName(state)
    }
}

export default connect(mapStateToProps, {})(Map);
