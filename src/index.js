import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Router} from "react-router-dom";
import {theme} from "loft-taxi-mui-theme"; // Импортируем саму тему
import {MuiThemeProvider} from "@material-ui/core/styles";
import {AuthProvider} from "./Components/HOCs/withAuth";
import {Provider} from "react-redux";
import store from "./Components/Redux/redux-store";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
            <AuthProvider>
                <MuiThemeProvider theme={theme}>
                    <App/>
                </MuiThemeProvider>
            </AuthProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
