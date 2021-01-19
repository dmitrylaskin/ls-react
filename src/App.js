import React from 'react';
import './App.css';
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import Map from "./Components/Map/Map";
import Header from "./Components/Header/Header";

export const MyContext = React.createContext()

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'home',
            email: '',
            password: '',
            isLoggedIn: false
        }
    }


    getState() {
        return this.state
    }

    navigateTo = (currentPage) => this.setState({currentPage})

    PAGES = {
        login: <Login navigateTo={this.navigateTo}/>,
        profile: <Profile text={'Profile'}/>,
        about: <About text={'About'}/>,
        map: <Map/>
    }

    logIn = (email, password) => {
        this.setState({email, password, isLoggedIn: true})
        console.log('logIn state: ', this.state)

    }
    logOut = () => {
        this.setState({
            email: '',
            password: '',
            isLoggedIn: false
        })
    }


    render() {

        console.log(this.getState())

        return (

            <MyContext.Provider value={{
                logIn:this.logIn,
                logOut:this.logOut,
                isLoggedIn:this.state.isLoggedIn
            }}>
                <>
                    <Header navigateTo={this.navigateTo}/>

                    <main>
                        <section style={{padding: '20px'}}>
                            {this.PAGES[this.state.currentPage]}
                        </section>
                    </main>
                </>
            </MyContext.Provider>
        );
    }
}

export default App;
