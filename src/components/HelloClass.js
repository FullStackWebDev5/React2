import React, { Component } from "react";

class HelloClass extends Component {
  constructor(props){
    super(props)

    this.state = {
      greetTo: 'World', 
      greetAlsoTo: 'Australia'
    }
  }

  changeGreetTo = () => {
    this.setState({
      greetAlsoTo: 'India'
    })
  }

  render() {
    const { greetTo, greetAlsoTo } = this.state
    return (
      <>
        <h1>Hello { greetTo } and { greetAlsoTo }</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
          voluptas earum aliquid! Aperiam quisquam odit, fugiat voluptatum iste
          eveniet. Aut facere ipsam beatae ex? Mollitia, quia sapiente!
          Repellendus, quasi animi!
        </p>
        <button onClick={this.changeGreetTo}>Change greetTo</button>
      </>
    );
  }
}

export default HelloClass;
