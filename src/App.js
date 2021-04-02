import React, {Component, useState} from 'react';
import './App.css';

const Header = ({counter}) => {
    return (<h2>
        {counter}
    </h2>)
}

class App extends Component {

    state = {
        counter: 0,
        hide: true,
        todos: [`hello`, `alex`],
    };
    click = () => {
this.setState({counter: this.state.counter + 1})
    }
    toggle = () => {
this.setState({hide: !this.state.hide})
    }
    change = () => {
let newArr = [...this.state.todos];
newArr[0]= Math.random();
this.setState({todos: newArr})
    }

    render() {
        let {counter, hide, todos} = this.state;
        return (
            <div className="App">
                {hide && <Header counter={counter}/>}

                <button onClick={this.click}>increment</button>
                <br/>
                <button onClick={this.toggle}>toggle</button>
                <hr/>
                <button onClick={this.change}>change</button>
                <hr/>
                <div>{todos[0]}</div>
                <div>{todos[1]}</div>
            </div>
        );
    }
}


// function App() {
//
//     const [counter, setCounter] = useState(0);
//     // const [newCounter, setNewCounter] = useState(3);
//
//     const click = () => {
//         // let counterVel = counter + newCounter;
//         // setNewCounter(newCounter + 2);
//         // setCounter(counterVel);
//         setCounter(counter + 1);
//         console.log(counter);
//     }
//     const [hide, sethide] = useState(true)
//     const toggle = () => {
//         sethide(!hide)
//     }
//     const [todos, settodos] = useState([`hello`, `alex`]);
//     const change = () => {
//         const newArr = [...todos];
//         newArr[0] = Math.random();
//         settodos(newArr);
//     }
//
//     return (
//         <div className="App">
//
//             {hide && <Header counter={counter}/>}
//
//             <button onClick={click}>increment</button>
//             <br/>
//             <button onClick={toggle}>toggle</button>
//             <hr/>
//             <button onClick={change}>change</button>
//             <hr/>
//             <div>{todos[0]}</div>
//             <div>{todos[1]}</div>
//         </div>
//     );
// }

export default App;
