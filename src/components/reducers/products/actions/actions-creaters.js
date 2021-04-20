import {setProduct, startLoad, endLoad} from "./actions-types";


export const On_SetProduct = (payload) => ({type: setProduct, payload})
export const On_StartLoad = () => ({type: startLoad})
export const On_endLoad = () => ({type: endLoad})


export const Load_On_Products = () => async (dispatch) => {
    try {
        dispatch(On_StartLoad())
        const resp = await fetch(`https://fakestoreapi.com/products`)
        const json = await resp.json()
        dispatch(On_SetProduct(json))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(On_endLoad())
    }
}
