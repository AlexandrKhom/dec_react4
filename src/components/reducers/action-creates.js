import {INC, DEC, INC_CUS, RES, On_Users, On_Bad, On_Good, onSet, onStart, onEnd} from "./action-types";


export const incAction = ()=>({type: INC})
export const decAction = ()=> ({type: DEC})
export const resAction = ()=> ({type: RES})
export const incCusAction = (payload)=>({type: INC_CUS, payload})

export const onUsers = (payload) => ({type: On_Users, payload})
export const onBad = (payload) => ({type: On_Bad, payload})
export const onGood = (payload) => ({type: On_Good, payload})

export const setAct = (payload) => ({type: onSet, payload})
export const startAct = () => ({type: onStart})
export const endAct = () => ({type: onEnd})


