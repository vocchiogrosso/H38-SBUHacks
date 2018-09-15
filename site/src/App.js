import React, { Component } from 'react';
import './App.css';

import Vin from './photos/Vincent.jpg';
import Vic from './photos/Charles.jpg';
import Spe from './photos/Spencer.jpg';
import Jer from './photos/Jerry.jpg';
import Man from './photos/Manuel.jpg';

document.title="SolVR";

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <div className="Screen" id="Header">
          <div className="Bar" id="HB">
            <a href="#Header"><div class="NavBarItem" id="NB1"><h2>SolVR</h2></div></a>
            <a href="#B"><div class="NavBarItem" id="NB2"><h2>Demo</h2></div></a>
            <a href="#C"><div class="NavBarItem" id="NB3"><h2>About</h2></div></a>
            <a href="#D"><div class="NavBarItem" id="NB4"><h2>Our Team</h2></div></a>
            <a href="#E"><div class="NavBarItem" id="NB5"><h2>Follow Us</h2></div></a>
          </div>
          <div class="SubScreen" id="HS">
            <h1 id="IT1">We. Change. Everything.</h1>
          </div>
        </div>
        <div className="Screen" id="B">
          <h2 class="HeadText WhiteText">Demo</h2>
          {/*Link To Demo Project*/}
          <a href="http://www.google.com"><h1 id="DL">Download SolVR for PC</h1></a>
        </div>
        <div className="Screen" id="C">
          <h2 class="HeadText">About</h2>
          <p id="EL">Our Project Is Designed To Help Individuals Improve Visual Coordination.</p>
          <p id="EL">All Of This Has Been Built In A State Of The Art Virtual Enviorment</p>
        </div>
        <div className="Screen" id="D">
          <h2 class="HeadText WhiteText">Our Team</h2>
          <div class="PersonalPanel" id="PPA"><img alt="" class="Photo" src={Vin}/><p class="Name">Vincent Occhiogrosso</p><p id="SP">React Developer</p>    <a target="_blank" rel="noopener noreferrer" href="https://github.com/vocchiogrosso"><div className='PERSONALLINK'><p id="PPP">Visit</p></div></a>  </div>
          <div class="PersonalPanel" id="PPB"><img alt="" class="Photo" src={Vic}/><p class="Name">Victor Lin</p><p id="SP">Python/Java</p>                  <a target="_blank" rel="noopener noreferrer"  href="https://github.com/AllThingsSlippy"><div className='PERSONALLINK'><p id="PPP">Visit</p></div></a>  </div>
          <div class="PersonalPanel" id="PPC"><img alt="" class="Photo" src={Spe}/><p class="Name">Spencer Williams</p><p id="SP">C++/Unreal</p>             <a target="_blank"  rel="noopener noreferrer"href="https://github.com/spencer-williams"><div className='PERSONALLINK'><p id="PPP">Visit</p></div></a>  </div>
          <div class="PersonalPanel" id="PPD"><img alt="" class="Photo" src={Jer}/><p class="Name">Jerry Turcios</p><p id="SP">Everything</p>                <a target="_blank" rel="noopener noreferrer" href="https://github.com/jerryturcios08"><div className='PERSONALLINK'><p id="PPP">Visit</p></div></a>  </div>
          <div class="PersonalPanel" id="PPE"><img alt="" class="Photo" src={Man}/><p class="Name">Manuel Carbajal</p><p id="SP">C++/Java</p>                <a target="_blank" rel="noopener noreferrer" href="https://github.com/MCarbajalSuarez"><div className='PERSONALLINK'><p id="PPP">Visit</p></div></a>  </div>
        </div>
        <div className="Screen" id="E">
            <div className="SubScreen">
              <h2 class="HeadText">Follow Us</h2>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Solvr-240537483471698/?view_public_for=240537483471698"><div class="SocialLink" id="SL1"></div></a>
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Solvr12"><div class="SocialLink" id="SL2"></div></a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/Sol-VR"><div class="SocialLink" id="SL3"></div></a>
            </div>
            <div className="Bar" id="Footer">
              <p>Made With <span class="R">&hearts;</span> By SolVR (C) 2018</p>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
