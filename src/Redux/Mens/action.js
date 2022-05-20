import axios from "axios";

export  const GET_MENS = 'GET_MENS';
export const LODDING_MENS = 'LODDING_MENS';
export const ERROR_MENS = 'ERROR_MENS';

export const getmens = (payload) => ({
    
        type: GET_MENS,
        payload
    
})

export const loadingmens = () =>( {
   
        type: LODDING_MENS
   
})

export const errormens = (payload) => ({
  
        type: ERROR_MENS,
        payload
   
})


export const getMensData = () => {
        return (dispatch) => {
                dispatch(loadingmens());
                axios.get(`https://urban-touch-0181.herokuapp.com/mens`)
                .then(res => {
                  dispatch(getmens(res.data))
                //   console.log(res.data)
                }
                )
                .catch(err => {dispatch(errormens(err))}
                )
        }
}
