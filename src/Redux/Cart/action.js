import axios from "axios";
import { CART } from "../../Api_helper/api_helper";

export  const GET_CART = 'GET_CART';
export const LODDING_CART = 'LODDING_CART';
export const ERROR_CART = 'ERROR_CART';

export const getCart = (payload) => ({
    
        type: GET_CART,
        payload
    
})

export const loadingCart = () =>( {
   
        type: LODDING_CART
   
})

export const errorCart = (payload) => ({
  
        type: ERROR_CART,
        payload
   
})




export const getCartData = (user_id) => {
    return (dispatch) => {
            dispatch(loadingCart());
            axios.get(`${CART}${user_id}`)
            .then(res => {
              dispatch(getCart(res.data))
            //   console.log(res.data)
            }
            )
            .catch(err => {dispatch(errorCart(err))}
            )
    }
}

export const removeCartItem = (_id,user_id)=>{
    return (dispatch) => {
        axios.delete(`${CART}${_id}`)
        .then(res => {
            // dispatch(getCartData())
            dispatch(getCartData(user_id))
        }
        )
        .catch(err => {console.log(err)}
        )
    }
}

export const removeUserCartItems = (user_id)=>{
    return (dispatch) => {
        axios.delete(`${CART}${user_id}`)
        .then(res => {
            dispatch(getCartData())
        }
        )
        .catch(err => {console.log(err)}
        )
    }
}

export const updateCartItem = (cartItem,item_id)=>{
    return (dispatch) => {
        axios.put(`${CART}${item_id}`,cartItem)
        .then(res => {  
        })
        .catch(err => {
            console.log(err)
        }
        )
    }
}