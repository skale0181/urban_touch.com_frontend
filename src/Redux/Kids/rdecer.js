export const {GET_KIDS, LODDING_KIDS, ERROR_KIDS} = require('./action');

const initialState = {
    loading: false,
    error: null,
    data: []
}   

export const kidsreducer = (state = initialState, action) => {  
    switch (action.type) {
        case GET_KIDS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            }
        case LODDING_KIDS:
            return {
                ...state,
                loading: true,
                error: null,
                data: []
            }
        case ERROR_KIDS:
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

