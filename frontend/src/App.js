import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import SignUp from "./components/SignUp";
import Footer from "./components/Footer"
import LoginPage from "./components/LoginPage"
import HeroSection from "./components/HeroSection"
import Ads from "./components/Ads"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Head from "./components/Head";
import "./css/app.css";

function App()
{
  return (
    <div>
      <Router>
        <Head />
              <Switch>
                  <Route path="/" exact ><LoginPage/></Route>
                  <Route path="/signin" ><LoginPage /></Route>
                  <Route path="/signup"><SignUp /></Route>
              </Switch>
            
        <Footer />
      </Router>
    </div>
  );
}

export default App;