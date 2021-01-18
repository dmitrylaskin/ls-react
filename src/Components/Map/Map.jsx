import React from 'react';
import mapboxgl from 'mapbox-gl';


class Map extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()
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
        var map = new mapboxgl.Map({
            container: this.myRef.current,
            style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
            center: [30.32, 59.93], // starting position [lng, lat]
            zoom: 10 // starting zoom
        });
    }
    render() {

        return (
                <div style={this.styles.myMap} ref={this.myRef}>

                </div>
        );
    }
}

export default Map;
