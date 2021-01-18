import React from 'react';
import './App.css';
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import Map from "./Components/Map/Map";
import Header from "./Components/Header/Header";

export const MyContext = React.createContext(null)



class App extends React.Component {

    state = {
        currentPage: 'home',
        email: '',
        password: '',
        isLoggedIn: false
    }

    navigateTo = (currentPage) => this.setState({currentPage})

    PAGES = {
        login: <Login navigateTo={this.navigateTo}/>,
        profile: <Profile text={'Profile'}/>,
        about: <About text={'About'}/>,
        map: <Map/>
    }

    logObj = {
        logIn(email, password) {
            console.log('log in')
            this.setState({
                email: email,
                password: password,
                isLoggedIn: false
            })
        },
        logOut() {
            console.log('log out')
            this.setState({isLoggedIn: false})
        }
    }

    render() {

        return (
            <MyContext.Provider value={this.logObj}>
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
