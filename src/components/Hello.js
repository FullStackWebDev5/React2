import React from "react";

const Hello = ({ greetTo, greetAlsoTo = 'India' }) => {
  // const { greetTo, greetAlsoTo } = props
  return (
    <>
      <h1>Hello {greetTo} and {greetAlsoTo}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
        voluptas earum aliquid! Aperiam quisquam odit, fugiat voluptatum iste
        eveniet. Aut facere ipsam beatae ex? Mollitia, quia sapiente!
        Repellendus, quasi animi!
      </p>
    </>
  );
};

export default Hello
