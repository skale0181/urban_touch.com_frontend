export const {GET_MENS, LODDING_MENS, ERROR_MENS} = require('./action');

const initialState = {
    loading: false,
    error: null,
    data: []
}   

export const mensreducer = (state = initialState, action) => {  
    switch (action.type) {
        case GET_MENS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            }
        case LODDING_MENS:
            return {
                ...state,
                loading: true,
                error: null,
                data: []
            }
        case ERROR_MENS:
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


// const 