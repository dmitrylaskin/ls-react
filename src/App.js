import React from 'react';
import './App.css';
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import Map from "./Components/Map/Map";
import {withAuth} from "./Components/HOCs/withAuth";

export const MyContext = React.createContext()

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'home'
        }
    }


    getState() {
        return this.state
    }

    navigateTo = (currentPage) => {
        if (this.props.IsLoggedIn) {
            this.setState({currentPage})
        } else {
            this.setState({currentPage: 'home'})
        }
    }

    render() {
        const PAGES = {
            home: (props) => <Home {...props}/>,
            profile: (props) => <Profile {...props} />,
            map: (props) => <Map {...props}/>
        }

        console.log('App-state: ', this.getState())
        console.log('App-props: ', this.props)

        return (
                <>
                    <Header navigateTo={this.navigateTo} isLoggedIn={this.state.isLoggedIn}/>

                    <main>
                        <section style={{padding: '20px'}}>
                            {PAGES[this.state.currentPage]({navigateTo: this.navigateTo})}

                        </section>
                    </main>
                </>

        );
    }
}

export default withAuth(App);
