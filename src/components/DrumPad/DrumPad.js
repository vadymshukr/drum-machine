import React from 'react';
import './DrumPad.css';
import $ from 'jquery';

class DrumPad extends React.Component{
  constructor(props){
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  componentDidMount(){
    document.addEventListener('keydown', this.handleKeyPress)
  }
  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  handleKeyPress(e){
    const key = this.props.value;
    if (e.key.toUpperCase() === key){
      this.playSound();
      if(e){
        this.props.displayUpdate(this.props.id);
      }
    }
  }


  playSound(e){
    const sound = document.getElementById(this.props.value);

    sound.currentTime = 0;
    sound.play();
    if(e){
      this.props.displayUpdate(this.props.id);
    }
    
    $( this ).addClass('active');
      setTimeout(function(){
        $('.drum-pad').removeClass('active');
      }, 500);
  }
  render(){
    return (
        <div id={this.props.id} className="drum-pad" onClick={this.playSound}>
            <p>{this.props.value}</p>
            <audio src={this.props.sound} className="clip" id={this.props.value}></audio>
        </div>
    )
  }
}

export default DrumPad;
