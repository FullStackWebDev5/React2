import React, { Component } from 'react'
import './App.css'
import HelloClass from './components/HelloClass.js'

class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="App">
        <HelloClass />
        {/* <HelloClass greetTo='Africa' />
        <HelloClass greetTo='Australia' /> */}
        {/* <Hello1 greetTo='Africa' />
        <Hello1 greetTo='America' greetAlsoTo='Australia' /> */}
      </div>
    );
  }
}

export default App;
