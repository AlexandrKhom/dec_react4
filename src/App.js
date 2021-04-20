import React, {useEffect, useMemo} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {
    // On_StartLoad,
    // On_SetProduct,
    // On_endLoad,
    Load_On_Products
} from "./components/reducers/products/actions/actions-creaters";
import {toggleItemInCart, toggleItemInWishlist} from "./components/reducers/cartANDwish/action/action-creators";


const Header = () => {

    const {products} = useSelector(store => store.product)
    const {productsInCart} = useSelector(store => store.cart)
    const {productsInWishlist} = useSelector(store => store.wishlist)


    const calcCartSum = useMemo(() => {
return products
    .filter(el => productsInCart.includes(el.id))
    .reduce((acc, el) => acc += el.price, 0)
    }, [products, productsInCart])

    const calcWishSum = useMemo(() => {
        return products
            .filter(el => productsInWishlist.includes(el.id))
            .reduce((acc, el) => acc += el.price, 0)
    }, [products, productsInWishlist])


    return (<header>
        <h2>HEADER</h2>
        <div className={`counters`}>
            <span>wish: {productsInWishlist.length} ($ {calcWishSum})</span>
            <span>cart: {productsInCart.length} ($ {calcCartSum})</span>
        </div>

    </header>)
}


const Products = () => {

    const dispatch = useDispatch()

    const {products, isLoad} = useSelector(store => store.product)
    const {productsInCart} = useSelector(store => store.cart)
    const {productsInWishlist} = useSelector(store => store.wishlist)


    // const productsFetch = async () => {
    //     try {
    //         dispatch(On_StartLoad())
    //         const resp = await fetch(`https://fakestoreapi.com/products`)
    //         const json = await resp.json()
    //         dispatch(On_SetProduct(json))
    //     } catch (e) {
    //         console.log(e)
    //     } finally {
    //         dispatch(On_endLoad())
    //     }
    // }

    useEffect(() => {
        dispatch(Load_On_Products())
        // productsFetch()
    }, [])


    return (<div className={`product-wrapper`}>
        {/*<h1>Products list</h1>*/}
        {isLoad && (<h1>LOADING......</h1>)}
        {products.map(el => (<div key={el.id} className={`product-item`}>
            <button
                style={{backgroundColor: productsInWishlist.includes(el.id) ? `blueviolet` : ``}}
                onClick={() => dispatch(toggleItemInWishlist(el.id))}>
                {productsInWishlist.includes(el.id) ? `remove from wishlist` : `add to wishlist`}</button>
            <button
                style={{backgroundColor: productsInCart.includes(el.id) ? `red` : ``}}
                onClick={() => dispatch(toggleItemInCart(el.id))}>
                {productsInCart.includes(el.id) ? `remove from cart` : `add to cart`}
            </button>
            <h2>{el.title}</h2>
            <h2>{el.price}</h2>
            <img src={el.image} alt={``} style={{width: `50%`}}/>
        </div>))}
    </div>)

}


function App() {
    return (
        <div className="App">
            <Header/>
            <Products/>

        </div>
    );
}

export default App;
