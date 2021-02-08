import React from 'react';
import mapboxgl from 'mapbox-gl';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getCardName, getIsLoggedIn} from "../Redux/map-selector";
import classes from './Map.module.css'
import DestinationForm from "../DestinationForm/DestinationForm";

const coordinates = [[30.296064,59.926102],[30.295998,59.926178],[30.296774,59.926144],
    [30.299091,59.923546],[30.286839,59.920956],[30.279137,59.916134],[30.27503,59.908867],
    [30.25832,59.909126],[30.252645,59.904724],[30.247093,59.904057],[30.240889,59.894974],
    [30.245876,59.893478],[30.256395,59.887089],[30.289454,59.880245],[30.294506,59.877121],
    [30.290562,59.852345],[30.280144,59.835918],[30.275133,59.833431],[30.278881,59.834045],
    [30.31538,59.814285],[30.323488,59.808533],[30.324347,59.793816],[30.317898,59.790894],
    [30.280516,59.797192],[30.275146,59.800365],[30.274046,59.800365],[30.272182,59.800652]]

const drawRoute = (map, coordinates) => {
    map.flyTo({
        center: coordinates[0],
        zoom: 15
    });

    map.addLayer({
        id: "route",
        type: "line",
        source: {
            type: "geojson",
            data: {
                type: "Feature",
                properties: {},
                geometry: {
                    type: "LineString",
                    coordinates
                }
            }
        },
        layout: {
            "line-join": "round",
            "line-cap": "round"
        },
        paint: {
            "line-color": "#ffc617",
            "line-width": 8
        }
    });
};

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
        if (this.props.cardName) {

        this.map.on('load', () => {
            drawRoute(this.map, coordinates)
        })
        }

    }
    componentWillUnmount() {
        this.map.remove()
    }


    render() {

        return (
            !this.props.isLoggedIn ? <Redirect to={'home'}/> :
            <div className={classes.wrapper}>
                <div className={classes.map} data-testid='map' ref={this.myRef}>
                    {this.props.cardName ? <DestinationForm/> : <div className={classes.fillData}>Заполните платежные данные</div>}
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
