import {INC, DEC, INC_CUS, RES, On_Users, On_Bad, On_Good, OnEnd, OnSet, OnStart} from "./action-types";


export const incAction = () => ({type: INC})
export const decAction = () => ({type: DEC})
export const resAction = () => ({type: RES})
export const incCusAction = (payload) => ({type: INC_CUS, payload})

export const onUsers = (payload) => ({type: On_Users, payload})
export const onBad = (payload) => ({type: On_Bad, payload})
export const onGood = (payload) => ({type: On_Good, payload})


export const startAct = () => ({type: OnStart})
export const endAct = () => ({type: OnEnd})
export const setAct = (payload) => ({type: OnSet, payload})


export const loadProducts = () => async (dispatch) => {
    try {
        dispatch(startAct())
        const resp = await fetch(`https://fakestoreapi.com/products`)
        const json = await resp.json()
        dispatch(setAct(json))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(endAct())
    }
}
