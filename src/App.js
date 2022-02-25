import React, { Component } from 'react'
import './App.css'
import CounterClass from './components/CounterClass'
import HelloClass from './components/HelloClass'
import CollegeStudents from './components/CollegeStudents/CollegeStudents'

class App extends Component {
  render(){
    return (
      <div className="App">
        <CollegeStudents />
        {/* <CounterClass /> */}
        {/* <HelloClass /> */}
        {/* <HelloClass greetTo='Africa' />
        <HelloClass greetTo='Australia' /> */}
        {/* <Hello1 greetTo='Africa' />
        <Hello1 greetTo='America' greetAlsoTo='Australia' /> */}
      </div>
    );
  }
}

export default App;
