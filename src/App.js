import React from 'react';
import './App.css';
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import SignUpForm from "./Components/SignUpForm/SignUpForm";
import Map from "./Components/Map/Map";


const PAGES = {
    login: <Login/>,
    profile: <Profile/>,
    about: <About/>,
    map: <Map/>
}

class App extends React.Component {

    state = ({currentPage: 'home'})

    render() {

        const navigateTo = (currentPage) => this.setState({currentPage})


        return (
            <>
                <SignUpForm navigateTo={this.navigateTo}/>
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
