import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './exp.css';
import Awart from './componentes/Awart';
import Contact from './componentes/Contact';
import Education from './componentes/Education';
import Experience from './componentes/Experience';
import Objective from './componentes/Objective';
import Personalskill from './componentes/Personalskill';
import Photo from './componentes/Photo';
import Professionalskill from './componentes/Professionalskill';
import Profile from './componentes/Profile';


class App extends Component {

  render() {
    return(
      <div>
          <div id="esqCor">
            <Photo id="foto"/>
            <Profile />
            <Objective />
            <Personalskill />
            <Contact />
          </div>
          
          <div id="dirCor">
           <Education /> 
            <Experience/>
            <Professionalskill />
            <Awart />
          </div>
        </div>
    );
  }
}

export default App;
