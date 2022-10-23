import { FC, useEffect, useReducer } from 'react';

import { ICartProduct } from '../../interfaces';
import { CartContext, cartReducer } from './';

export interface CartState {
    cart: ICartProduct[];
}
export interface Props {
    children: React.ReactNode;
}

const CART_INITIAL_STATE: CartState = {
    cart: [],
}


export const CartProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

    const addProductToCart = (product: ICartProduct) => {
        // !Nivel1
        // dispatch({
        //     type: '[Cart] - Add Product',
        //     payload: product
        // })
        // !Nivel2
        // const productsInCart = state.cart.filter(p => p._id !== product._id && p.size !== product.size);
        // dispatch({
        //     type: '[Cart] - Add Product',
        //     payload: [...productsInCart, product]
        // })
        // !Nivel3

        const productsInCart = state.cart.some(p => p._id === product._id);

        if (!productsInCart) return dispatch({ type: '[Cart] - Update from products in cart', payload: [...state.cart, product] });

        const productInCartButDifferentSize = state.cart.some(p => p._id === product._id && p.size === product.size);

        if (!productInCartButDifferentSize) return dispatch({ type: '[Cart] - Update from products in cart', payload: [...state.cart, product] });

        //Actualizar
        const updatedProducts = state.cart.map(p => {
            if (p._id !== product._id) return p;
            if (p.size !== product.size) return p;

            //Actualizar la Cantidad
            p.quantity = p.quantity + product.quantity;

            return p;
        });

        dispatch({ type: '[Cart] - Update from products in cart', payload: [...updatedProducts] });

    }



    return (
        <CartContext.Provider value={{
            ...state,

            //Methods
            addProductToCart,
        }}>
            {children}
        </CartContext.Provider>
    )
};