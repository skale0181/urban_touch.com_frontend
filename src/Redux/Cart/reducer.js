export const {GET_CART, LODDING_CART, ERROR_CART} = require('./action');

const initialState = {
    loading: false,
    error: null,
    data: [],
    total:0
}   

export const cartreducer = (state = initialState, action) => {  
    switch (action.type) {
        case GET_CART:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload,
                total:action.payload.reduce((acc,curr)=>{
                    return acc+curr.price
                },0)

            }
        case LODDING_CART:
            return {
                ...state,
                loading: true,
                error: null,
                data: [],
                total:0
            }
        case ERROR_CART:
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: [],
                total:0
            }
        default:
            return state;
    }
}

