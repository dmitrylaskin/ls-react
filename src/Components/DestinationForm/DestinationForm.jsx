import React, {useState} from 'react';
import classes from './DestinationForm.module.css'
import form from '../LoginForm/LoginForm.module.css'
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";

const styles = {
    form: {
        position: 'absolute',
        top: '50px',
        left: '50px',
        width: '400px',
        height: '300px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        padding: '30px 40px',
        justifyContent: 'space-between'
    }
}

const DestinationForm = (props) => {

    const [select, setSelect] = useState({
        from: 'Museum'
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        const name = event.target.name;
        setSelect({[name]:event.target.value})
    }
    let submitHandler = (event) => {
        event.preventDefault()
        console.log(event.target[0].value)
        console.log(event.target[1].value)
    }

    return (
        // <form className={classes.destinationForm} onSubmit={submitHandler} >
        //     <select name="select">
        //         <option value="value1">Значение 1</option>
        //         <option value="value2">Значение 2</option>
        //         <option value="value3">Значение 3</option>
        //     </select>
        //     <select name="select">
        //         <option value="value1">Значение 1</option>
        //         <option value="value2">Значение 2</option>
        //         <option value="value3">Значение 3</option>
        //     </select>
        //     <input type="submit" value={'button'}/>
        // </form>
        <>
        <FormControl className={props.classes.form}>
            <InputLabel htmlFor="age-native-simple_1">From</InputLabel>
            <Select
                native
                value={select.from}
                onChange={handleSubmit}
                inputProps={{
                    name: 'age',
                    id: 'age-native-simple_1',
                }}
            >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
            </Select>
            <input type="submit" value={'button'}/>
        </FormControl>
        {/*    <FormControl className={classes.formControl}>*/}
        {/*        <InputLabel htmlFor="age-native-simple_2">To</InputLabel>*/}
        {/*        <Select*/}
        {/*            native*/}
        {/*            value={'d'}*/}
        {/*            onChange={handleSubmit}*/}
        {/*            inputProps={{*/}
        {/*                name: 'age',*/}
        {/*                id: 'age-native-simple_2',*/}
        {/*            }}*/}
        {/*        >*/}
        {/*            <option aria-label="None" value="" />*/}
        {/*            <option value={10}>Ten</option>*/}
        {/*            <option value={20}>Twenty</option>*/}
        {/*            <option value={30}>Thirty</option>*/}
        {/*        </Select>*/}
        {/*        */}
        {/*    </FormControl>*/}
        </>
    )




};

export default withStyles(styles)(DestinationForm);
