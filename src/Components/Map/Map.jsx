import React from 'react';
import mapboxgl from 'mapbox-gl';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {
    getAddresses,
    getCardName,
    getCoordinates,
    getFrom,
    getIsLoggedIn,
    getPaidStatus,
    getTo
} from "../Redux/map-selector";
import classes from './Map.module.css'
import DestinationForm from "../DestinationForm/DestinationForm";
import {addressesRequest, coordinatesRequest} from "../Redux/map-reducer";


class Map extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()
        this.map = null
    }
    drawRoute = (map, coordinates) => {
        if (map.getLayer('route')) {
            map.removeLayer('route');
            map.removeSource('route');
        }
        map.flyTo({
            center: coordinates[0],
            zoom: 15
        });
        map.addLayer({
            id: 'route',
            type: 'line',
            source: {
                type: 'geojson',
                data: {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'LineString',
                        coordinates
                    }
                }
            },
            layout: {
                'line-join': 'round',
                'line-cap': 'round'
            },
            paint: {
                'line-color': '#ffc617',
                'line-width': 8
            },
        });
    }


    componentDidMount() {
        //{"addresses":["Пулково (LED)","Эрмитаж","Кинотеатр Аврора","Мариинский театр"]}
        this.props.addressesRequest()

        mapboxgl.accessToken = 'pk.eyJ1Ijoid2V2IiwiYSI6ImNrazJkOHgyNTEwZmwybm81cnhveGg1bG4ifQ.p_mRS1GjQSlWlB2FeH0Q4Q';
        this.map = new mapboxgl.Map({
            container: this.myRef.current,
            style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
            center: [30.32, 59.93], // starting position [lng, lat]
            zoom: 10 // starting zoom
        });
        if (this.props.cardName) {

        this.map.on('load', () => {
            this.drawRoute(this.map, this.props.coordinates)
        })
        }

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.coordinates.length !== this.props.coordinates.length) {
            this.drawRoute(this.map, this.props.coordinates)
        }
    }

    componentWillUnmount() {
        this.map.remove()
    }


    render() {
        return (
                <div className={classes.wrapper}>
                <div className={classes.map} data-testid='map' ref={this.myRef}>
                    {this.props.isPaid
                        ? <DestinationForm coordinates={this.props.coordinates} coordinatesRequest={this.props.coordinatesRequest} addresses={this.props.addresses} />
                        : <div className={classes.fillData}>Заполните платежные данные</div>}
                </div>
            </div>

        );
    }
}
const mapStateToProps = (state) => {

    return  {
        isLoggedIn: getIsLoggedIn(state),
        isPaid: getPaidStatus(state),
        addresses: getAddresses(state),
        coordinates: getCoordinates(state)
    }
}

export default connect(mapStateToProps, {addressesRequest, coordinatesRequest})(Map);
