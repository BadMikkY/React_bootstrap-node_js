import logo from './logo.svg';
import './App.css';
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Products from "./pages/Products";
import Registration from "./pages/Registration";
import React from "react";
function App() {
  return (
      <div>
          <Header/>
          <div className="rout">
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/About" component={About}/>
              <Route exact path="/Contacts" component={Contacts}/>
              <Route exact path="/Products" component={Products}/>
              <Route exact path="/Registration" component={Registration}/>
          </Switch>
          </div>
      </div>

  );
}

export default App;
