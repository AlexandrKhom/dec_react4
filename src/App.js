import React from 'react';
import './App.css';

import {useSelector, useDispatch} from "react-redux";
import {incAction, incCusAction, resAction, decAction} from "./components/redux/action-creators/action-cr";


function App() {

  const counter = useSelector(({counter})=> counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
<h1>{counter}</h1>
        <button onClick={()=>dispatch(incAction())}>INC</button>
        <button onClick={()=>dispatch(decAction())}>DEC</button>
        <button onClick={()=>dispatch(resAction())}>RES</button>
        <button onClick={()=>dispatch(incCusAction(100))}>INC_CUS</button>
    </div>
  );
}



export default App;
