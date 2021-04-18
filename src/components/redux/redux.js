import {createStore, applyMiddleware} from "redux";
import {reducer} from "../reducers/reducers";
import {INC, DEC, RES, INC_CUS} from "../reducers/action-types";


const logger = (store) => (next) => (action) => {
    const result = next(action)
    console.log(result)
    console.log(`next state`, store.getState())
    return result
}

const protectCounter = (store) => (next) => (action) => {
    const actionsForCounter = [INC, DEC, RES, INC_CUS]

    const {isAllowedToChange} = store.getState().counter1

    if (!isAllowedToChange && actionsForCounter.includes(action.type)) {
        console.log(`u r not allowed`)
        return
    }
    next(action)
}

const persister = (store) => (next) => (action) => {

    next(action)
    const {counter1} = store.getState()
    localStorage.setItem(`counter1`, JSON.stringify(counter1))

}

const middleware = [protectCounter, /*logger,*/ persister]


export const store = createStore(reducer, applyMiddleware(...middleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
