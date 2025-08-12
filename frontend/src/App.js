
import './App.css';
import React, { useState } from "react";

import MyForm from './Components/MyForm';
import Navbar from './Components/Navbar';

function App() {

  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOpt, setSelectedOpt] = useState('');
  const [count, setCount]=useState(0);
  return (
    <div >
      <Navbar/>
      <MyForm selectedOption={selectedOption} setSelectedOption={setSelectedOption} selectedOpt={selectedOpt} setSelectedOpt={setSelectedOpt} count={count} setCount={setCount}/>
    
    </div>
  );
}

export default App;
