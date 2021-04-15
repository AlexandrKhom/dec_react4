import {INC, DEC, INC_CUS, RES} from "./action-types";


export const incAction = ()=>({type: INC})
export const decAction = ()=> ({type: DEC})
export const resAction = ()=> ({type: RES})
export const incCusAction = (payload)=>({type: INC_CUS, payload})

