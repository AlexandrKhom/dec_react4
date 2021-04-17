import {INC, DEC, INC_CUS, RES, OnUser, OnBad, OnGood, OnStart, OnEnd, OnSet} from "../action-types/action-types";


export const incAction = ()=> ({type: INC})
export const incCusAction = (payload)=> ({type: INC_CUS, payload})
export const decAction = ()=> ({type: DEC})
export const resAction = ()=> ({type: RES})

export const usersAction = (payload) => ({type: OnUser, payload})
export const badAction = (payload) => ({type: OnBad, payload})
export const goodAction = (payload) => ({type: OnGood, payload})

export const startAct = () => ({type: OnStart})
export const endAct = () => ({type: OnEnd})
export const setAct = (payload) => ({type: OnSet, payload})

export const loadProducts = () => async (dispatch) => {
    try {
        dispatch(startAct())
        const resp = await fetch(`https://fakestoreapi.com/products`)
        const json = await resp.json()
        dispatch(setAct(json))
        console.log(json)
    } catch (e) {
        console.error(e)
    } finally {
        dispatch(endAct())
    }
}

