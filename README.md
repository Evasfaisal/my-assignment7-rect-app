What is JSX, and why is it used?

ANS: jxs means javascript xml . its a syntax extension for javascript that used in the world of web development.


ANS : useing JSX to actually simplify their lives because writing ReactJS code in pure JavaScript would be much more uncomfortable.






What is the difference between State and Props?

ANS: ( props ) are arguments that can be passed into a component. They are like inputs that allow data to be passed from a parent component to its child components. Think of them as a way to communicate information between different parts of your React application.

ANS:  ( state ) is an object that stores data specific to a component. This data can change over time, and when it does, the component re-renders to reflect the updated state. Think of it as the component's memory, allowing it to remember and manage its current state.






What is the useState hook, and how does it work?

ANS: (useState) is a Hook that returns an array with two elements:

first=> The current state value.
second=> A function to update this value.

ANS: Using the useState() API, you can create a new state variable, and have a way to alter it. useState() accepts the initial value of the state item and returns an array containing the state variable, and the function you call to alter the state. Since it returns an array we use array destructuring to access each individual item, like this: const [count, setCount] = useState(0)





How can you share state between components in React?


ANS: To pass state from one component to another,i can use props







How is event handling done in React?

ANS:  event handling patterns in React that are used to handle user interactions and update the application state like this 


import React, { useState } from 'react';

function Button() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={handleClick}>Clicked {count} times</button>
  );
}