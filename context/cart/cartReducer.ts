import { ICartProduct } from '../../interfaces'
import { CartState } from './'

type CartActionType =
    | { type: '[Cart] - LoadCart from cookies | storage', payload: ICartProduct[] }
    | { type: '[Cart] - Update from products in cart', payload: ICartProduct[] }
    | { type: '[Cart] - Change cart quantity', payload: ICartProduct }
    | { type: '[Cart] - Remove product in cart', payload: ICartProduct }



export const cartReducer = (state: CartState, action: CartActionType): CartState => {

    switch (action.type) {
        case '[Cart] - LoadCart from cookies | storage':
            return {
                ...state,
                cart: [...action.payload]
            }
        case '[Cart] - Update from products in cart':
            return {
                ...state,
                cart: [...action.payload]
            }
        case '[Cart] - Change cart quantity':
            return {
                ...state,
                cart: state.cart.map((product) => {
                    if (product._id !== action.payload._id) return product;
                    if (product.size !== action.payload.size) return product;

                    return action.payload;
                })
            }
        case '[Cart] - Remove product in cart':
            return {
                ...state,

                cart: state.cart.filter((product) => {
                    if (product._id !== action.payload._id) return true;
                    if (product.size !== action.payload.size) return true;

                    return false;
                })
                // cart: state.cart.filter((product) => !(product._id === action.payload._id && product.size === action.payload.size))
            }
        default:
            return state;
    }
}