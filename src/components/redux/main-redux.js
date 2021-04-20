import {createStore, applyMiddleware} from "redux";
import {reducer} from "../reducers/main-reducer";
import thunk from "redux-thunk";


const persister = (store) => (next) => (action) => {
    next(action)

    const {wishlist, cart} = store.getState();
    localStorage.setItem(`wishlist`, JSON.stringify(wishlist))
    localStorage.setItem(`cart`, JSON.stringify(cart))
}

const middleware = [thunk, persister];

export const store = createStore(reducer, applyMiddleware(...middleware))
