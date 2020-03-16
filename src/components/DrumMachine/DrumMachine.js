import React from 'react';
import './DrumMachine.css';
import DrumPad from '../DrumPad/DrumPad';
import Display from '../Display/Display';

const sounds = {
  openhihat: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  kick2: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  kick: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  closedhihat: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  snare: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  stick: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
  crash: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
  cymbal: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
  cowbell: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}

class DrumMachine extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      displayContent: ''
    }
    this.displayUpdate = this.displayUpdate.bind(this);
  }

  displayUpdate(data){
    this.setState({
      displayContent: data
    })
  }
  
  render(){
    return (
      <div id="drum-machine" className="drum-machine-section"> 
        <div className="row">
          <Display displayData={this.state.displayContent}/>
        </div>
        
        <div className="row">
          <DrumPad value='Q' id="HiHat" keyCode = "81" sound={sounds.openhihat} displayUpdate={this.displayUpdate}/>
          <DrumPad value='W' id="ClHiHat" keyCode = "87" sound={sounds.closedhihat} displayUpdate={this.displayUpdate}/>
          <DrumPad value='E' id="Crash" keyCode = "69" sound={sounds.crash} displayUpdate={this.displayUpdate}/>  
        </div>
        <div className="row">
          <DrumPad value='A' id="Click" keyCode = "65" sound={sounds.stick} displayUpdate={this.displayUpdate}/>
          <DrumPad value='S' id="Cymbal" keyCode = "83" sound={sounds.cymbal} displayUpdate={this.displayUpdate}/>
          <DrumPad value='D' id="CowBell" keyCode = "68" sound={sounds.cowbell} displayUpdate={this.displayUpdate}/>
        </div>
        <div className="row">
          <DrumPad value='Z' id="Kick" keyCode = "90" sound={sounds.kick} displayUpdate={this.displayUpdate}/>
          <DrumPad value='X' id="LowKick" keyCode = "88" sound={sounds.kick2} displayUpdate={this.displayUpdate}/>
          <DrumPad value='C' id="Snare" keyCode = "67" sound={sounds.snare} displayUpdate={this.displayUpdate}/>
        </div>
        
        
      </div>
    )
  }
}

export default DrumMachine;
