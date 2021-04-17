import {OnBad, OnGood, OnUser} from "../redux/action-types/action-types";


const initialState = {
    users: [],
    badImp: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case OnUser: {
            return {
                ...state,
                users: action.payload
            }
        }
        case OnBad: {
            return  {
                ...state,
                badImp: [...state.badImp,  action.payload]
            }
        }
        case OnGood: {
            return {
                ...state,
                badImp: state.badImp.filter(el => el !== action.payload)
            }
        }

        default:
            return state
    }

}
export default reducer
