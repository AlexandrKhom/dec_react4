import {applyMiddleware, createStore} from "redux";
import {reducer} from "../reducers/reducers-main";
import {DEC, INC, INC_CUS, RES} from "../redux/action-types/action-types";

import thunk from "redux-thunk";

// const logger = (store) => (next) => (action) => {
//     console.log(action)
//     // console.log(`next State`, store.getState())
// }

const protectCounter = (store) => (next) => (action) => {
    const actionsForCounter = [DEC, INC, INC_CUS, RES]
    const {isAllowedToChange} = store.getState().counter1
        if (!isAllowedToChange && actionsForCounter.includes(action.type)){
            console.log(`u r not allowed`)
            return
        }
        next(action)
}

const persistor = (store) => (next) => (action) => {
    next(action)
    const {counter1} = store.getState()
    console.log(counter1)
    localStorage.setItem('counter1', JSON.stringify(counter1))
}


const middleware = [thunk, protectCounter, persistor]


export const store = createStore(reducer, applyMiddleware(...middleware))
