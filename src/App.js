import React, {useEffect} from 'react';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {incAction, incCusAction, resAction, decAction, onUsers, onBad, onGood} from "./components/reducers/action-creates";
// import {On_Users} from "./components/reducers/action-types";
// import usersReducer from "./components/reducers/users-reducer";


const PhotosList = () => {
    const dispatch = useDispatch();

    const users = useSelector(({usersReducer: {users}}) => users)
    const badImp = useSelector(({usersReducer: {badImp}}) => badImp)

    const fetchList = async () => {
        const resp = await fetch(`https://dummyapi.io/data/api/user?limit=10`,
            {headers: {'app-id': 'lTE5abbDxdjGplutvTuc'}})

        const json = await resp.json()
        console.log(json)

        dispatch(onUsers(json.data))
    }

    useEffect(() => {
        if (!users.length) {
            fetchList()
        }
    }, [])

    return (<div>
        <h1>Photo-list</h1>
        <div>
            {users.map(el => (<img
                style={{filter: badImp.includes(el.id) ? 'blur(2px)' : ''}}
                onClick={() => {
                    const inList = badImp.includes(el.id)
                    dispatch(inList ? onGood(el.id) : onBad(el.id))
                }}
                src={el.picture} key={el.id} title={el.firstName} alt={el.lastName}/>))}
        </div>
    </div>)
}

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
            {!!(counter1 % 2) && <PhotosList/>}
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
