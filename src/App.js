import React from 'react';
import './App.css';
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import Map from "./Components/Map/Map";
import {withAuth} from "./Components/HOCs/withAuth";
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {setCurrentPage} from "./Components/Redux/app-reducer";
import Myxhr from "./Components/Header/Myxhr";

export const MyContext = React.createContext()

class App extends React.Component {

    getState() {
        return this.state
    }

    // navigateTo = (currentPage) => {
    //     if (this.props.IsLoggedIn) {
    //         setCurrentPage(currentPage)
    //     } else {
    //         setCurrentPage('home')
    //     }
    // }

    render() {
        return (
                <>
                    <Header />

                    <main>
                        <section style={{padding: '20px'}}>
                            <Switch>
                                <Route path='/home' render={() => <Home {...this.props}/>}/>
                                <Route path='/profile' render={() => <Profile {...this.props}/>}/>
                                <Route path='/map' render={() => <Map {...this.props}/>}/>

                            </Switch>

                            {/*{PAGES[this.state.currentPage]({navigateTo: this.navigateTo})}*/}

                        </section>
                        <Myxhr/>
                    </main>
                </>

        );
    }
}
const mapStateToProps = (state) => {

    return {app: state.app.currentPage}
}
let Compose = compose(
    connect(mapStateToProps, {setCurrentPage}),
    withAuth
)(App)
export default Compose;
