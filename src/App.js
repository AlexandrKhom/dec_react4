import React from 'react';
import './App.css';

import {useSelector, useDispatch} from "react-redux";

function App() {

  const counter = useSelector(({counter})=> counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
<h1>{counter}</h1>
      <button onClick={()=>dispatch({type: `INC_CUS`, payload: 100})}>INC_CUS</button>
      <button onClick={()=>dispatch({type: `INC`})}>INC</button>
      <button onClick={()=>dispatch({type: `DEC`})}>DEC</button>
      <button onClick={()=>dispatch({type: `RES`})}>RES</button>
    </div>
  );
}

export default App;
