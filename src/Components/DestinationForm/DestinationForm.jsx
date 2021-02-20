import React, {useEffect, useState} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Select from "@material-ui/core/Select";
import MyButton from "../Button/MyButton";
import CarCategory from "../CarCategory/CarCategory";


const styles = {
    form: {
        position: 'absolute',
        top: '50px',
        left: '50px',
        width: '420px',
        height: '440px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        padding: '30px 40px',
        borderRadius: '10px'
    },
    select: {
        marginBottom: '40px'
    }
}


const DestinationForm = (props) => {

    const [departure, setDeparture] = useState({
        name: 'Пулково (LED)'
    })
    const [arrival, setArrival] = useState({
        name: 'Эрмитаж'
    })

    const handleFrom = (event) => {
        event.preventDefault()
        setDeparture({name: event.target.value})

    }
    const handleTo = (event) => {
        event.preventDefault()
        setArrival({name: event.target.value})
    }
    const myButtonHandler = () => {
        props.coordinatesRequest(departure.name, arrival.name)

    }

    return (
            props.addresses && <div className={props.classes.form}>
                <Select
                    className={props.classes.select}
                    native
                    value={departure.name}
                    onChange={handleFrom}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-simple_1'
                    }}>
                    {props.addresses.map(item => {
                        if (item !== arrival.name) {
                            return <option key={item} value={item}>{item}</option>}})}

                </Select>
                <Select
                    className={props.classes.select}
                    native
                    value={arrival.name}
                    onChange={handleTo}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-simple_1',
                    }}>
                    {props.addresses.map(item => {
                        if (item !== departure.name) {
                            return <option key={item} value={item}>{item}</option>}})}
                </Select>

                <CarCategory/>

                <MyButton onClick={myButtonHandler} value={'Заказать'}/>

            </div>
    )
};
export default withStyles(styles)(DestinationForm);
