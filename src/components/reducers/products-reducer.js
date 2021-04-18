import {onStart, onSet, onEnd} from "./action-types";


const initialState = {
    products: [],
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.payload) {
        case onSet: {
            return{
                ...state, products: action.payload,
                isLoading: false
            }
        }
        case onStart: {
            return {
                ...state, isLoading: true
            }
        }
        case onEnd: {
            return {
                ...state, isLoading: false
            }
        }
        default: return state
    }

}
export default reducer








