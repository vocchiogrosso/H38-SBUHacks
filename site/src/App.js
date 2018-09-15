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
         
          </div>
        </div>
        <div className="Screen" id="B">
          <h2 class="HeadText WhiteText">Demo</h2>
        
        </div>
        <div className="Screen" id="C">
          <h2 class="HeadText">About</h2>

        </div>
        <div className="Screen" id="D">
          <h2 class="HeadText WhiteText">Our Team</h2>
          <div class="PersonalPanel" id="PPA"><img class="Photo" src={Vin}/><p class="Name">Vincent Occhiogrosso</p><p id="SP">React Developer</p>    <a target="_blank" href="https://github.com/vocchiogrosso"><div className='PERSONALLINK'><p id="PPP">Visit</p></div></a>  </div>
          <div class="PersonalPanel" id="PPB"><img class="Photo" src={Vic}/><p class="Name">Victor Lin</p><p id="SP">Python/Java</p>                  <a target="_blank" href="https://github.com/AllThingsSlippy"><div className='PERSONALLINK'><p id="PPP">Visit</p></div></a>  </div>
          <div class="PersonalPanel" id="PPC"><img class="Photo" src={Spe}/><p class="Name">Spencer Williams</p><p id="SP">C++/Unreal</p>             <a target="_blank" href="https://github.com/spencer-williams"><div className='PERSONALLINK'><p id="PPP">Visit</p></div></a>  </div>
          <div class="PersonalPanel" id="PPD"><img class="Photo" src={Jer}/><p class="Name">Jerry Turcios</p><p id="SP">Everything</p>                <a target="_blank" href="https://github.com/jerryturcios08"><div className='PERSONALLINK'><p id="PPP">Visit</p></div></a>  </div>
          <div class="PersonalPanel" id="PPE"><img class="Photo" src={Man}/><p class="Name">Manuel Carbajal</p><p id="SP">C++/Java</p>                <a target="_blank" href="https://github.com/MCarbajalSuarez"><div className='PERSONALLINK'><p id="PPP">Visit</p></div></a>  </div>
        </div>
        <div className="Screen" id="E">
            <div className="SubScreen">
              <h2 class="HeadText">Follow Us</h2>
              <a href="https://www.facebook.com/Solvr-240537483471698/?view_public_for=240537483471698" target="_blank"><div class="SocialLink" id="SL1"></div></a>
              <a href="https://twitter.com/Solvr12"><div class="SocialLink" id="SL2"></div></a>
              <div class="SocialLink" id="SL3"></div></a>
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
