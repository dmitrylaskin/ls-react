import React from 'react';
import './App.css';
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import Map from "./Components/Map/Map";
import Header from "./Components/Header/Header";





class App extends React.Component {

    state = ({currentPage: 'home'})

    navigateTo = (currentPage) => this.setState({currentPage})

    PAGES = {
        login: <Login navigateTo={this.navigateTo}/>,
        profile: <Profile/>,
        about: <About/>,
        map: <Map/>
    }



    render() {

        return (
            <>
                <Header navigateTo={this.navigateTo}/>

                <main>
                    <section style={{padding: '20px'}}>
                        {this.PAGES[this.state.currentPage]}
                    </section>
                </main>
            </>
        );
    }
}

export default App;
