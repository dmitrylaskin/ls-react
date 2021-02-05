import React from 'react';
import classes from './App.module.css';
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import Map from "./Components/Map/Map";
import {Redirect, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import Logo from './assets/img/header_logo.png'


class App extends React.Component {



    render() {
        return (
                <div className={this.props.isLoggedIn ? classes.wrapperAuth : classes.wrapper}>
                    <div className={this.props.isLoggedIn ? '' : classes.container}>
                    {this.props.isLoggedIn
                        ? <Header/>
                        : <div className={classes.logoSection}>
                                <img src={Logo} alt=""/>
                            </div>}



                        <section className={!this.props.isLoggedIn ? classes.mapSection : classes.mainSection}>
                            <Switch>
                                <Route exact path='/' render={() => <Redirect to={'/home'} /> }/>
                                <Route path='/home' render={() => <Home />}/>
                                <Route path='/profile' render={() => <Profile />}/>
                                <Route path='/map' render={() => <Map />}/>
                                <Route path='*' render={() => <div><b>404 NOT FOUND</b></div> }/>
                            </Switch>


                        </section>

                    </div>
                </div>

        );
    }
}
const mapStateToProps = (state) => {

    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}

export default connect(mapStateToProps, {})(App)
