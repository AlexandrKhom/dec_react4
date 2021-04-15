import React from 'react';
import './App.css';

import {useSelector, useDispatch} from "react-redux";
import {incAction, incCusAction, resAction, decAction} from "./components/reducers/action-creates";

function App() {

    const counter1 = useSelector(({counter1: {counter}}) => {
        return counter
    })
    const counter2 = useSelector(({counter2: {counter}}) => {
        return counter
    })

    // const {counter1, counter2} = useSelector(({counter1, counter2})=> ({
    //     counter1: counter1.counter,
    //     counter2: counter2.counter
    // }))

    const dispatch = useDispatch()
    return (
        <div className="App">
            <h1>{counter1}</h1>
            <br/> <h1>{counter2}</h1>
            <button onClick={() => dispatch(incCusAction(100))}>INC_CUS</button>
            <button onClick={() => dispatch(incAction())}>INC</button>
            <button onClick={() => dispatch(decAction())}>DEC</button>
            <button onClick={() => dispatch(resAction())}>RES</button>
        </div>
    );
}

export default App;
