import logo from './logo.svg';
import './App.css';
import SlimSelectAdapter from './SlimSelect/SlimSelect';
import { useState, useEffect } from 'react';

function App() {
  const [list, setList] = useState([
    {text: 'Option 1', value: '1'},
    {text: 'Option 2', value: '2'},
    {text: 'Option 3', value: '3'},
    {text: 'Option 4', value: '4'},
    {text: 'Option 5', value: '5'},
    {text: 'Option 6', value: '6'},
    {text: 'Option 7', value: '7'},
    {text: 'Option 8', value: '8'},
    {text: 'Option 9', value: '9'},
    {text: 'Option 10', value: '10'},
  ]);
  const [show,setShow] = useState(true);

  
  return (
    <div className="App">
      App
      {show && <SlimSelectAdapter onSelectTarget={(info)=>{
        console.log("info",info);
      }} data={list}
      placeholder="Select option"
      defaultValue='3222'
      multiple={true}
      />}
      <button onClick={()=>{
        setShow(!show);
      }
      }>toggle</button>
    </div>
  );
}

export default App;
