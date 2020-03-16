import React from 'react';
import './Display.css';

class Display extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div id="display" className="displaySection"> 
            <p>{this.props.displayData}</p>
      </div>
    )
  }
}

export default Display;
