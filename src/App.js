import React, {useState, createContext, useContext} from 'react';
import './App.css';


const CounterContext = createContext();

const ContextProvider = ({children}) => {
    const [counter, setCounter] = useState(0)

    const incCounter = ()=> {
        setCounter(counter+1)
    }
    const decCounter = ()=> {
        setCounter(counter-1)
    }
    return (
        <CounterContext.Provider value={{counter, incCounter, decCounter}}>
            {children}
        </CounterContext.Provider>
    )
}

const Counter = () => {
    const {counter, incCounter, decCounter} = useContext(CounterContext)

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <br/>
            <button onClick={incCounter}>inc</button>
            <button onClick={decCounter}>dec</button>
        </div>
    )
}

const Header = () => {
    const {counter} = useContext(CounterContext)

    return (
        <h2>Header  counter: {counter}</h2>
    )
}


function App() {
    return (
        <div className="App">
            <ContextProvider>
            <Counter/>
            <br/>
            <br/>
            <Header/>
            </ContextProvider>
        </div>
    );
}

export default App;
