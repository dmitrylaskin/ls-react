import React from 'react';
import './App.css';
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import Map from "./Components/Map/Map";




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
                <header>
                    <nav>
                        <ul>
                            <li>
                                <button onClick={() => this.navigateTo('login')}>Login</button>
                            </li>
                            <li>
                                <button onClick={() => this.navigateTo('profile')}>Profile</button>
                            </li>
                            <li>
                                <button onClick={() => this.navigateTo('about')}>About</button>
                            </li>
                        </ul>
                    </nav>
                </header>

                <main>
                    <section>
                        {this.PAGES[this.state.currentPage]}
                    </section>
                </main>
            </>
        );
    }
}

export default App;
