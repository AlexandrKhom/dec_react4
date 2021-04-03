import React, {Component, useEffect, useState} from 'react';
import './App.css';

// let interval;
// class Comp extends Component {
//     componentDidMount() {
//        interval = setInterval(()=> {
//             console.log(`wait a new data about airplanes`);
//         }, 2000)
//         console.log(`component Did Mount CHILD`)
//     }
// componentWillUnmount() {
//     console.log(`component Will Unmount`)
//     clearInterval(interval)
// }
//
//     render() {
//         console.log(`child render`);
//         return (<h2>Child</h2>)
//     }
// }
//
//
// class App extends Component {
//
//     state = {counter: 0};
//
//     componentDidMount() {
//         console.log(`component Did Mount`)
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log(`component Did Update`)
//     }
//
//     incCounter = () => {
//         this.setState({counter: this.state.counter + 1})
//     }
//
//
//     render() {
//
//         console.log(`parent render`)
//         return (
//             <div>
//                 <h1 onClick={this.incCounter}>
//                     Hello Alex {this.state.counter}
//
//                 </h1>
//                 {!!(this.state.counter % 2) && <Comp/>}
//
//
//             </div>
//         )
//     }
// }

function App() {
    let interval;

    const Comp = () => {
        useEffect(() => {
        interval = setInterval(()=> {
            console.log(`wait a new data about airplanes`)
        }, 1000)
            return ()=> clearInterval(interval)
        }, [])
        return (<h2>CHILD</h2>)
    }

    const [counter, setCounter] = useState(0);
    const incCounter = () => {
        setCounter(counter + 1)
    }

    useEffect(() => {
        console.log(`Did Mount Parent`)
    }, [])
    useEffect(() => {
        console.log(`Did Update Mount Parent`);
        return () => {
            console.log(`Parent Unmount`)
        }
    }, [counter])

    return (
        <div className="App">
            <h1 onClick={incCounter}>Hello Alex {counter}</h1>
            {!!(counter % 2) && <Comp/>}
        </div>
    );
}

export default App;
