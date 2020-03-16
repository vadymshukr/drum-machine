import React from 'react';
import './App.css';
import DrumMachine from '../DrumMachine/DrumMachine';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <DrumMachine />
      </div>
    )
  }
}

export default App;
