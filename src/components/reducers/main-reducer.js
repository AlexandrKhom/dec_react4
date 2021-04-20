import {combineReducers} from "redux";
import productReducer from '../reducers/products/products-reducers'
import cartReducer from '../reducers/cartANDwish/cart-reducer'
import wishlistReducer from '../reducers/cartANDwish/wishlist-reducer'


export const reducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,

})
