import {INCt, RESt, INC_CUSt, DECt} from "./action-types";


const initialState = { counter: 0}

 const reducer = (state = initialState, action )=>{
    switch (action.type) {
        case INCt:{
            return {...state, counter: state.counter + 1}
        }
        case INC_CUSt:{
            return {...state, counter: state.counter + action.payload}
        }
        case DECt:{
            return {...state, counter: state.counter - 1}
        }
        case RESt:{
            return {...state, counter: state.counter = 0}
        }
        default:{
            return state
        }
    }
}
export default reducer
