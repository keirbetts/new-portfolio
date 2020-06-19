import React from 'react';
import Toolbar from './Components/Toolbar';
import Sidedrawer from './Components/Sidedrawer';
import Backdrop from './Components/Backdrop';
import './App.css'
import { Component } from 'react';
import Footer from './Components/Footer';
import { Router } from "@reach/router";
import Projects from './Components/Projects';
import Home from './Components/Home';
import Techstack from './Components/PageComps/Techstack';
import Contact from './Components/PageComps/Contact';
import Education from './Components/PageComps/Education';
import ReactComp from './Components/ProjectComps/ReactComp';
import ExpressComp from './Components/ProjectComps/ExpressComp'
import MevnComp from './Components/ProjectComps/MevnComp'
import PyComp from './Components/ProjectComps/PyComp'
import ReduxComp from './Components/ProjectComps/ReduxComp'
import Moments from './Components/ProjectComps/Moments';


class App extends Component {

  state = {
    sideDrawerOpen: false

  }
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }


  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }





  render() {

    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div className='app'>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <Sidedrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Footer />
        <Router>
          <Home path='/' />
          <Projects path='/projects' />
          <ReactComp path='/projects/react' />
          <ExpressComp path='/projects/express' />
          <PyComp path='/projects/python' />
          <ReduxComp path='/projects/redux' />
          <MevnComp path='/projects/mevn' />
          <Moments path='/projects/moments' />
          <Techstack path='/techstack' />
          <Contact path='/contact' />
          <Education path='/education' />
        </Router>
      </div>
    );
  }
}

export default App;

