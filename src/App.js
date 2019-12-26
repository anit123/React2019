import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Parentcomponent from './components/Parentcomponent';
// import Counter from './components/Counter';
// import Counter1 from './components/Counter1';
// import Newpractice from './components/Newpractice';
// import Propswithdistructuring from './Propswithdistructuring';
// import Propsdestructuringwithclass from './components/Propsdestructuringwithclass';




function App() {
  return (
    <div className="App">

        {/* <Counter/> */}
        {/* <Counter1/> */}

        {/* <Newpractice/>
        <Propswithdistructuring name="sambad" address="Kalaiya"/>
        <Propsdestructuringwithclass name="Rajan" email="rajan.email.com" address="san fransisco" /> */}
       
        <Parentcomponent/>
    </div>
  );
}

export default App;
