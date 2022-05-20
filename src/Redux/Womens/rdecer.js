export const {GET_WOMENS, LODDING_WOMENS, ERROR_WOMENS} = require('./action');

const initialState = {
    loading: false,
    error: null,
    data: []
}   

export const womensreducer = (state = initialState, action) => {  
    switch (action.type) {
        case GET_WOMENS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            }
        case LODDING_WOMENS:
            return {
                ...state,
                loading: true,
                error: null,
                data: []
            }
        case ERROR_WOMENS:
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
