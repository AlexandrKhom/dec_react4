import {OnEnd, OnSet, OnStart} from "./action-types";


const initialState = {
    products: [],
      isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case OnSet: {
            return {
                ...state, products: action.payload
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
        default: return state
    }


}

export default reducer




