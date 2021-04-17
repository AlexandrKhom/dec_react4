import {combineReducers} from "redux";

import counter1Reduce from '../reducers/counter-one'
import counter2Reduce from '../reducers/counter-two'
import usersReduce from '../reducers/users-reducer'
import productsReducer from '../reducers/products-reducer'

export const reducer = combineReducers({
    counter1: counter1Reduce,
    counter2: counter2Reduce,
    usersReduce,
    products: productsReducer
})

