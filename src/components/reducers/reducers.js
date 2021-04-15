import {INC, INC_CUS, RES, DEC} from "../redux/action-types/action";

const initialState = {
    counter: 0
}

export const reducer = (state = initialState, action )=>{
    switch (action.type) {
        case INC:{
            return {...state, counter: state.counter + 1}
        }
        case INC_CUS:{
            return {...state, counter: state.counter + action.payload}
        }
        case DEC:{
            return {...state, counter: state.counter - 1}
        }
        case RES:{
            return {...state, counter: state.counter = 0}
        }
        default:{
            return state
        }
    }
}
