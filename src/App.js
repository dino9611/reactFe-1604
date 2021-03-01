import React, {Component} from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import Card from "./pages/Card";
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component{
  state={};

  render(){
    return(
      <div>
        <Header/>
        <div className="pt-5 px-5 mx-5">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Card' component={Card} />
          </Switch>
        </div>
        <ToastContainer />
      </div>
    )
  }
}

export default App;
