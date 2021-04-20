import {ADD_PRODUCT, REMOVE_PRODUCT} from "./action/action-types";


const initFromLS1 = localStorage.getItem('cart')

const initialState = initFromLS1 ? JSON.parse(initFromLS1) : {
    productsInCart: [],

}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            return {
                ...state, productsInCart: [...state.productsInCart, action.payload]
            }
        }
        case REMOVE_PRODUCT: {
            return {
                ...state, productsInCart: state.productsInCart.filter(el => action.payload !== el)
            }
        }
        default: return state
    }

}
export default reducer

