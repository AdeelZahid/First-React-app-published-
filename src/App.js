import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Dinner from './dinner.js';
import Message from './Message.js';

function App() {
  let [Count, setCount] = useState(5);
  let [isMorning, setMorning] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Working with React is Fun ...  </h1>
        <a
          className="App-link"
          href="https://www.facebook.com/mian214"
          target="_blank"
          rel="noopener noreferrer"
        >
         Adeel Zahid on Facebook
        </a>
      </header>

    <div className={`letCount ${isMorning ? 'dayNight' : ''}`}>
      <Message counter={Count}/>
      <h3> Good {isMorning ? 'Morning' : 'Night'} </h3>
      <br />
      <button onClick ={
        ()=> setCount(++Count)
      }> Increment </button>
      <button onClick={
        ()=>{
          setCount(--Count);
        }      }>
        Decrement
      </button>
      <button onClick={
        ()=>{
          setCount(Count = 0);
        }      }>
        Set To Zero
      </button>
    </div>


      <footer>
          <Dinner dishName="Chicken Tikka" sweetDish="Kheer Pasta"/>
      <button onClick={
        ()=>{
          setMorning(!isMorning);
        }
      }>Day Night Button</button>
      </footer>
    </div>
  );
}

export default App;
