import React from 'react';
import './App.css';
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import Map from "./Components/Map/Map";
import {withAuth} from "./Components/HOCs/withAuth";
import {Redirect, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {setCurrentPage} from "./Components/Redux/app-reducer";
import Logo from './assets/img/header_logo.png'

export const MyContext = React.createContext()

class App extends React.Component {



    render() {
        return (
                <div className={this.props.isLoggedIn ? 'wrapper-auth': 'wrapper'}>
                    <div className={this.props.isLoggedIn ? '' : 'container'}>
                    {this.props.isLoggedIn
                        ? <Header/>
                        : <div className='logo-section'>
                                <img src={Logo} alt=""/>
                            </div>}


                    <main>
                        <section style={{padding: '20px'}}>
                            <Switch>
                                <Route exact path='/' render={() => <Redirect to={'/home'} /> }/>
                                <Route path='/home' render={() => <Home {...this.props}/>}/>
                                <Route path='/profile' render={() => <Profile {...this.props}/>}/>
                                <Route path='/map' render={() => <Map {...this.props}/>}/>
                                <Route path='*' render={() => <div><b>404 NOT FOUND</b></div> }/>
                            </Switch>

                            {/*{PAGES[this.state.currentPage]({navigateTo: this.navigateTo})}*/}

                        </section>

                    </main>
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
let Compose = compose(
    connect(mapStateToProps, {setCurrentPage}),
    withAuth
)(App)
export default Compose;
