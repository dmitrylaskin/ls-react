import React, {Component} from 'react';

export const AuthContext = React.createContext()


export const AuthProvider = (props) => {

    const [IsLoggedIn, SetIsLoggedIn] = React.useState(false)

    const logIn = (email, password) => {

        if (email !== 'mail' || password !== 'pass') {
            return
        }
        SetIsLoggedIn(true)
    }
    const logOut = () => {
        SetIsLoggedIn(false)
    }


    return (
        <AuthContext.Provider value={{logIn, logOut, IsLoggedIn}}>
            {props.children}
        </AuthContext.Provider>
    );
};
export const withAuth = (Component) => {
    let withAuthContainer = (props) => {

        return (<AuthContext.Consumer>
            {value => <Component {...value} {...props}/>}
        </AuthContext.Consumer>)

    }
    return withAuthContainer
}

