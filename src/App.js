import React, {useEffect} from 'react';
import './App.css';

import {useSelector, useDispatch} from "react-redux";
import {
    incAction,
    decAction,
    incCusAction,
    resAction,
    usersAction, badAction, goodAction, loadProducts
} from "./components/redux/action-creaters/action-creaters";
import {store} from "./components/redux/redux-main";

import {endAct, startAct, setAct} from "./components/redux/action-creaters/action-creaters";

const Products = () => {
    const dispatch = useDispatch()

    const {products, isLoading} = useSelector(store => store.products)

    console.log({products, isLoading})

    // const fetchProducts = async () => {
    //
    // }

    useEffect(() => {
       dispatch(loadProducts())
    }, [])


    return (<div>
        {isLoading && (<h1 style={{color: `red`}}>LOADING</h1>)}

        {!isLoading && !!products.length && products.map(el => (
            <div key={el.id} style={{width: '60%', margin: '10px auto'}}>
                <h2>{el.title}</h2>
                <h2>{el.price}</h2>
                <h2>{el.description}</h2>
                <img style={{width: '80%'}} src={el.image}  />
            </div>
        ))}
    </div>)
}


// const PhotoList = () => {
//
//     const dispatch = useDispatch()
//     const users = useSelector(({usersReduce: {users}}) => users)
// const badImp = useSelector(({usersReduce: {badImp}}) => badImp)
//
//     const photoFetch = async () => {
//         const resp = await fetch(`https://dummyapi.io/data/api/user?limit=10`,
//             {headers: {'app-id': 'lTE5abbDxdjGplutvTuc'}})
//         const json = await resp.json()
//         dispatch(usersAction(json.data))
//         console.log(json)
//
//     }
//
//     useEffect(() => {
//         if (!users.length){
//         photoFetch()
//         }
//     }, [])
//
//     return (<div>
//         <h1>PHOTO</h1>
//         <div>
//             {users.map(el => (<img
//                 src={el.picture} key={el.id} title={el.firstName} alt={el.lastName}
//                 style={{filter: badImp.includes(el.id) ? 'blur(3px)' : ''}}
//                 onClick={()=> {
//                     const inList = badImp.includes(el.id)
//                     inList ? dispatch(goodAction(el.id)) : dispatch(badAction(el.id))
//                 }}
//
//             />))}
//         </div>
//     </div>)
// }


function App() {
    // const dispatch = useDispatch();
    //
    // const count = useSelector(({counter1: {counter}}) => counter)
    // const count2 = useSelector(({counter2: {counter}}) => counter)


    return (
        <div className="App">
            <Products/>
            {/*<h1>{count}</h1>*/}
            {/*/!*<h1>{count2}</h1>*!/*/}
            {/*<button onClick={() => dispatch(incAction())}>INC</button>*/}
            {/*<button onClick={() => dispatch(incCusAction(100))}>INC_CUS</button>*/}
            {/*<button onClick={() => dispatch(decAction())}>DEC</button>*/}
            {/*<button onClick={() => dispatch(resAction())}>RES</button>*/}
            {/*{!(count % 2) && <PhotoList/>}*/}
        </div>
    );
}

export default App;
