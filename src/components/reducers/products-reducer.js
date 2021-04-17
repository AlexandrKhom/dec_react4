import {OnSet, OnEnd, OnStart} from "../redux/action-types/action-types";


const initialState = {
    products: [],
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case OnSet: {
            return {
                ...state, products: action.payload, isLoading: false
            }
        }
        case OnStart: {
            return {
                ...state, isLoading: true
            }
        }
        case OnEnd: {
            return {
                ...state, isLoading: false
            }
        }
        default:
            return state
    }

}

export default reducer
