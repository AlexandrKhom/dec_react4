import {combineReducers} from "redux";
import counter1Reducer from './counter-one'
import counter2Reducer from './counter-two'
import usersReducer from '../reducers/users-reducer'
import productReducer from '../reducers/products-reducer'

export const reducer = combineReducers({
    counter1: counter1Reducer,
    counter2: counter2Reducer,
    usersReducer,
    product: productReducer,
})
