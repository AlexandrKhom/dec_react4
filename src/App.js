import React, {useState, useEffect} from 'react';
import './App.css';


const url = `https://jsonplaceholder.typicode.com/todos/`;

function App() {

    const clickFu = () => {
        setCounter(counter + 1)
    }
    const [counter, setCounter] = useState(1)
    const [todos, setTodos] = useState(null);
    const [load, setLoad] = useState(false)

    const fetchTodos = async () => {
        setLoad(true)
        const response = await fetch(`${url}${counter}`)
        const data = await response.json();
        setTimeout(() => {
            setTodos(data);
            setLoad(false)
        }, 700)
    }

    useEffect(() => {
        fetchTodos();
        return () => {
            setTodos(null)
        }
    }, [counter])


    return (
        <div className="App">
            <div>
                <button onClick={clickFu}>CLICK</button>
                {counter}
            </div>
            <br/>
            {load && (
                <h1>LOADING.......</h1>
            )}
            <div>
                {!!todos && (
                    <h2>
                        {todos.id} - {todos.title}
                    </h2>
                )}
            </div>
        </div>
    );
}

export default App;
