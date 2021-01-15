import React from 'react';
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import MainContent from "./Components/MainContent/MainContent";
import OrderPage from "./Components/OrderPage/OrderPage";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import {Route, Switch} from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage";

function App() {
  return (
      <div className="wrapper">
          {/*<Sidebar/>*/}
          {/*<MainContent/>*/}
          <Switch>
              <Route path='/profile' component={ProfilePage}/>
              <Route path='/map' component={OrderPage}/>
              <Route path='/login' component={LoginPage}/>
          </Switch>
      </div>

  );
}

export default App;
