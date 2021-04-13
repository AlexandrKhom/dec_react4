import React, {useState} from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  const [flag, setFlag] = useState(true)

  const click = ()=>{
    setCounter(counter+1)
  }

  const [cls, setCls] = useState(`c`)


    const colorChange = ()=>{
      if (flag){
          // setCls(`c`)
          console.log(`c`)
      } else {
          // setCls(`d`)
          console.log(`d`)
      }
      setFlag(prevState => !prevState)
    }

  return (
    <div className="App">
<h1 className={counter % 2 ? `a` : `b`}>{counter}</h1>

      <br/>
      <br/>
      <button onClick={click}>click</button>
        <br/>
        <br/>
        <h1 className={flag ? 'c': 'd'}>COLOR</h1>
        <br/>
        <br/>
        <button onClick={colorChange}>Change Color</button>
    </div>
  );
}

export default App;
