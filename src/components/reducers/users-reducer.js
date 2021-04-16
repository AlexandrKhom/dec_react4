import {On_Bad, On_Good, On_Users} from "./action-types";


const initialState = {
    users: [],
    badImp: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case On_Users: {

            return {...state,
                users: action.payload}
        }
        case On_Bad: {
            return {...state,
            badImp: [...state.badImp, action.payload] }
        }
        case On_Good: {
            return {...state,
            badImp: state.badImp.filter(el => el !== action.payload)}
        }
        default:
            return state
    }


}
export default reducer


