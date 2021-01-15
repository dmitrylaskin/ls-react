import React from 'react';
import './App.css';
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";


let PAGES = {
    home: <Home/>,
    profile: <Profile/>,
    about: <About/>
}

class App extends React.Component {

    state = ({currentPage: 'home'})

    render() {

        let navigateTo = (page) => {
            this.setState({currentPage: page})
        }

        return (
            <>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <button onClick={() => navigateTo('home')}>Home</button>
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
