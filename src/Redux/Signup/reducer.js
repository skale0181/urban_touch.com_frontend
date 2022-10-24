
import { SIGNUP_LOADING,SIGNUP_SUCCESS, SIGNUP_FAILURE  } from "./action";

//get token fromm local storege;
// const user_token = localStorage.getItems("urbam_use_token");

const initialState = {
    loading :false,
    error:false,
    isauthenticated:false
//     isauthenticated:user_token?true:false
}


export const signupreducer = (store=initialState,{type,payload})=>{
    switch (type) {
        case SIGNUP_LOADING:
            return {...store,loading:true,error:false,isauthenticated:false}
        case SIGNUP_SUCCESS:
            return {...store,loading:false,error:false,isauthenticated:true}
        case SIGNUP_FAILURE:
            return {...store,loading:false, error:true,isauthenticated:false}
        case "LOGOUT2":
                return {...initialState,isauthenticated:false}
        default:
            return store
    }
}
