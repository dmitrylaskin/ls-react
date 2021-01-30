import React from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


class Map extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()
        this.map = null
    }

    styles = {
        myMap: {
            width: '100%',
            height: '100vh',
            background: 'white'
        }
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
    // componentWillUnmount() {
    //     this.map.remove()
    // }


    render() {

        return (
            !this.props.isLoggedIn ? <Redirect to={'home'}/> :
            <div className='map-wrapper'>
                <div className='map' data-testid='map' ref={this.myRef}>

                </div>
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    return  {
        isLoggedIn: state.auth.isLoggedIn
    }
}

export default connect(mapStateToProps, {})(Map);
