import {DEC2, INC2, INC_CUS2, RES2} from "../redux/action-types/action-types";


const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INC2: {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case INC_CUS2: {
            return {
                ...state,
                counter: state.counter + action.payload
            }
        }
        case DEC2: {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case RES2: {
            return {
                ...state,
                counter: state.counter = 0
            }
        }
        default: return state

    }

}
export default reducer
