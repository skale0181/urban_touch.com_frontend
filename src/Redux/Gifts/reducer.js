export const {GET_GIFTS, LODDING_GIFTS, ERROR_GIFTS} = require('./action');

const initialState = {
    loading: false,
    error: null,
    data: []
}   

export const giftreducer = (state = initialState, action) => {  
    switch (action.type) {
        case GET_GIFTS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            }
        case LODDING_GIFTS:
            return {
                ...state,
                loading: true,
                error: null,
                data: []
            }
        case ERROR_GIFTS:
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: []
            }
        default:
            return state;
    }
}


