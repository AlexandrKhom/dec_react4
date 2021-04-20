import {endLoad, setProduct, startLoad} from "./actions/actions-types";




const initialState = {
    products: [],
    isLoad: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case setProduct: {
            return {
                ...state, products: action.payload
            }
        }
        case startLoad: {
            return {
                ...state, isLoad: true
            }
        }
        case endLoad: {
            return {
                ...state, isLoad: false
            }
        }
        default: return state
    }

}
export default reducer


