import { LOGIN_FAILURE,LOGIN_SUCCESS,LOGIN_LOADING } from "./action";
  
//get token from local storage;
 const user = JSON.parse(localStorage.getItem("urban_use_token"));
 const userId = user?.userId?user.userId:"";
 const name = user?.name?user.name:"";
 const token = user?.token?user.token:"";

const initialState = {
    loading: false,
    error: false,
    isAuthenticated:token?true:false,
    token:token?token:"",
    userId:userId?userId:"",
    name:name?name:""
};


export const loginReducer = (store=initialState, {type,payload}) => {
    switch (type) {
        case LOGIN_LOADING:
            return {
                ...store,
                loading: true,
                error: false,
                isAuthenticated:false
            };
        case LOGIN_SUCCESS:
            return {
                ...store,
                loading: false,
                isAuthenticated: true,
                token: payload.token,
                userId: payload.userId,
                name: payload.name,
            };
        case LOGIN_FAILURE:
            return {
                ...store,
                loading: false,
                error: true,
                isAuthenticated: false,
                token: "",
                userId: "",
                name: "",
            };
        case "LOGOUT":
            localStorage.setItem("urban_use_token",JSON.stringify({}));
            return {...initialState,token:"",userId:"",name:"", isAuthenticated:false}
        default:
            return store;
    }
}