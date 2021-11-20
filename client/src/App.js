import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import { useState, useEffect } from 'react';
import './General.scss'
import CreateContent from './pages/CreateContent/CreateContent';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Single from './pages/Single/Single';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useSelector } from 'react-redux'



function App() {



  const userName = useSelector(state => state.user.userName)
  


  return (
    <Router>
      <NavBar />
      <Switch >

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/login" >
          <Login />
        </Route>

        <Route path="/createcontent" >
          {userName ? <CreateContent /> : <Home />}

        </Route>

        <Route path="/about" >
          <About />
        </Route>

        <Route path="/contact" >
          <Contact />
        </Route>

        <Route path="/post/:postID" >
          <Single />
        </Route>

      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
