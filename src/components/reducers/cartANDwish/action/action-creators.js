import {ADD_PRODUCT, ADD_WISHLIST, REMOVE_PRODUCT, REMOVE_WISHLIST} from "./action-types";


export const On_ADD_PRODUCT = (id) => ({type: ADD_PRODUCT , payload: id})
export const On_REMOVE_PRODUCT = (id) => ({type: REMOVE_PRODUCT , payload: id})

export const toggleItemInCart = (id) => (dispatch, getState) => {
    // console.log(getState(), id)
    const {cart: {productsInCart}} = getState()
    const alreadyExists = !!productsInCart.find(el => el === id)
    dispatch(alreadyExists ? On_REMOVE_PRODUCT(id) : On_ADD_PRODUCT(id))
}



export const On_ADD_WISHLIST = (id) => ({type: ADD_WISHLIST , payload: id})
export const On_REMOVE_WISHLIST = (id) => ({type: REMOVE_WISHLIST , payload: id})

export const toggleItemInWishlist = (id) => (dispatch, getState) => {
    // console.log(getState(), id)
    const {wishlist: {productsInWishlist}} = getState()
    const alreadyExists = !!productsInWishlist.find(el => el === id)
    dispatch(alreadyExists ? On_REMOVE_WISHLIST(id) : On_ADD_WISHLIST(id))
}



