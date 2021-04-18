import React, {useEffect} from 'react';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {
    // incAction,
    // incCusAction,
    // resAction,
    // decAction,
    onUsers,
    onBad,
    onGood,
    startAct,
    setAct,
    endAct
} from "./components/reducers/action-creates";


const Products = () => {

    const {products, isLoading} = useSelector(store => store.products)

    console.log({products, isLoading})
    const dispatch = useDispatch()

    // const products = useSelector(({products: {products}}) => products)
    // const isLoading = useSelector(({products: {isLoading}}) =>  isLoading)
    // console.log(products)

    const fetchProducts = async () => {
        try {
            dispatch(startAct())
            const resp = await fetch(`https://fakestoreapi.com/products`)
            const json = await resp.json()
            dispatch(setAct(json))
            console.log(json)
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(endAct())
        }
    }


    useEffect(() => {
        fetchProducts()
    }, [])


    return (<div>
        {isLoading && (<h1 style={{color: `red`}}>LOADING</h1>)}

        {!isLoading && !!products.length && products.map(el => (
            <div key={el.id} style={{width: '60%', margin: '10px auto'}}>
                <h2>{el.title}</h2>
                <h2>{el.price}</h2>
                <h2>{el.description}</h2>
                <img  src={el.image}  />
            </div>
        ))}
        GOGOGOGO
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
            <Products/>



        </div>
    );
}

export default App;
