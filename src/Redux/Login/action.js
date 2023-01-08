import { LOGIN } from "../../Api_helper/api_helper";

///type of action
export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

//action creator
export const loginLoading = () => ({
    type: LOGIN_LOADING
});

export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload: payload
}); 

export const loginFailure = () => ({
    type: LOGIN_FAILURE
});

export const logout = () => ({
    type: "LOGOUT"
});


export const login =({email,password})=> (dispatch) => {
    
    dispatch(loginLoading())
    fetch(LOGIN, {
        method: 'POST',
        body: JSON.stringify({email,password}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then((res) =>{
            ///set user details to local storage;
                   localStorage.setItem("urban_use_token", JSON.stringify({token:res.token,userId:res.user._id,name:res.user.name}))
                   dispatch(loginSuccess({userId:res.user._id,name:res.user.name,token:res.token}))
               }
             )
        .catch(err => dispatch(loginFailure(err)))
}