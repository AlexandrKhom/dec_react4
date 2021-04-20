import React, {useEffect} from 'react';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {
    incAction, incCusAction, resAction, decAction, onUsers, onBad, onGood,
    setAct, startAct, endAct, loadProducts
} from "./components/reducers/action-creates";


const Products = () => {
    const dispatch = useDispatch()

    const {products, isLoading} = useSelector(store => {
        console.log('--------------------------------------');
        console.log(store.product);
        console.log('--------------------------------------');
        return store.product
    })


    // const fetchProd = async () => {
    //     try {
    //         dispatch(startAct())
    //         const resp = await fetch(`https://fakestoreapi.com/products`)
    //         const json = await resp.json()
    //         console.log(json)
    //         dispatch(setAct(json))
    //     } catch (e) {
    //         console.log(e)
    //     } finally {
    //         dispatch(endAct())
    //     }
    // }

    useEffect(() => {
        dispatch(loadProducts())
        // fetchProd()
    }, [])


    return (<div>
        <div>
            {isLoading && (<h1>LOADING......</h1>)}
            {
                !isLoading && !!products.length &&
                products.map(el => (
                <div key={el.id} style={{width: `50%`}}>
                    <h1>{el.title}</h1>
                    <h1>{el.price}</h1>
                    <img src={el.image} style={{width: `50%`}}/>
                    <hr/>
                </div>))}

        </div>
        hello
    </div>)
}


const PhotosList = () => {
    const dispatch = useDispatch();

    const users = useSelector(({usersReducer: {users}}) => users)
    const badImp = useSelector(({usersReducer: {badImp}}) => badImp)

    const fetchList = async () => {
        const resp = await fetch(`https://dummyapi.io/data/api/user?limit=10`,
            {headers: {'app-id': 'lTE5abbDxdjGplutvTuc'}})

        const json = await resp.json()
        // console.log(json)

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
            <div><Products/></div>
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
