import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";
import Lottery from "./pages/Lottery";


export class App extends Component {
  
  render() {
    return (
      <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' exact component={Home} />
          <Route path='/lottery1' exact component={Lottery} />
          <Route path='/about-us' exact component={AboutUs} />
          <Route path='/contact-us' exact component={ContactUs} />
        </Switch>
      </Router>
        <Footer />
      </>
    );
  }
}

export default App;
