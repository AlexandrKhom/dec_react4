import React, {Component, useState} from 'react';
import './App.css';
import User from "./components/Card/User";

const Header = ({counter}) => {
    return (<h2>
        {counter}
    </h2>)
}

// class App extends Component {
//
//     state = {
//         counter: 0,
//         hide: true,
//         todos: [`hello`, `alex`],
//     };
//     click = () => {
// this.setState({counter: this.state.counter + 1})
//     }
//     toggle = () => {
// this.setState({hide: !this.state.hide})
//     }
//     change = () => {
// let newArr = [...this.state.todos];
// newArr[0]= Math.random();
// this.setState({todos: newArr})
//     }
//
//     render() {
//         let {counter, hide, todos} = this.state;
//         return (
//             <div className="App">
//                 {hide && <Header counter={counter}/>}
//
//                 <button onClick={this.click}>increment</button>
//                 <br/>
//                 <button onClick={this.toggle}>toggle</button>
//                 <hr/>
//                 <button onClick={this.change}>change</button>
//                 <hr/>
//                 <div>{todos[0]}</div>
//                 <div>{todos[1]}</div>
//             </div>
//         );
//     }
// }


function App() {

    const [counter, setCounter] = useState(0);
    // const [newCounter, setNewCounter] = useState(3);

    const click = () => {
        // let counterVel = counter + newCounter;
        // setNewCounter(newCounter + 2);
        // setCounter(counterVel);
        setCounter(counter + 1);
        console.log(counter);
    }
    const [hide, sethide] = useState(true)
    const toggle = () => {
        sethide(!hide)
    }
    const [todos, settodos] = useState([
        {id: 1, name: `alex`, status: 1},
        {id: 2, name: `ander`, status: 2},
        {id: 3, name: `max`, status: 3},
        {id: 4, name: `anna`, status: 4},
    ]);

    const change = () => {
        const newArr = [...todos];
        newArr[0] = {
            id: newArr[0].id,
            name: newArr[0].name,
            status: Math.random(),
        };
        settodos(newArr);
    }

    return (
        <div className="App">

            {hide && <Header counter={counter}/>}

            <button onClick={click}>increment</button>
            <br/>
            <button onClick={toggle}>toggle</button>
            <hr/>
            <button onClick={change}>change</button>
            <hr/>
            <br/><br/>
            {todos.map(value => (
                <div>
                    {value.name}
                    {value.status}
                </div>
            ))}
            <br/><br/>
            <div>
                {todos[0].name}
                {todos[0].status}
            </div>
            <div>
                {todos[1].name}
                {todos[1].status}
            </div>
            <br/><br/>
            <div>
                {todos.filter(value => value.id % 2).map(value => {
                    return (<User item={value} key={value.id}/>)
                })}
            </div>
        </div>
    );
}

export default App;
