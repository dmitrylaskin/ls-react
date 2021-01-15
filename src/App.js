import React from 'react';
import './App.css';
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import Map from "./Components/Map/Map";




class App extends React.Component {

    state = ({currentPage: 'home'})

    render() {

        const navigateTo = (currentPage) => this.setState({currentPage})

        const PAGES = {
            login: <Login navigateTo={navigateTo}/>,
            profile: <Profile/>,
            about: <About/>,
            map: <Map/>
        }

        return (
            <>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <button onClick={() => navigateTo('login')}>Login</button>
                            </li>
                            <li>
                                <button onClick={() => navigateTo('profile')}>Profile</button>
                            </li>
                            <li>
                                <button onClick={() => navigateTo('about')}>About</button>
                            </li>
                        </ul>
                    </nav>
                </header>

                <main>
                    <section>
                        {PAGES[this.state.currentPage]}
                    </section>
                </main>
            </>
        );
    }
}

export default App;
