import {INC, RES, DEC, INC_CUS} from "../action-types/action";

export const incAction = () => ({type: INC})
export const incCusAction = (payload) => ({type: INC_CUS, payload})
export const decAction = () => ({type: DEC})
export const resAction = () => ({type: RES})
