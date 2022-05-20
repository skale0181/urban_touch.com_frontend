import axios from "axios";

export  const GET_KIDS = 'GET_KIDS';
export const LODDING_KIDS = 'LODDING_KIDS';
export const ERROR_KIDS = 'ERROR_KIDS';

export const getKids = (payload) => ({
    
        type: GET_KIDS,
        payload
    
})

export const loadingKids = () =>( {
   
        type: LODDING_KIDS
   
})

export const errorKids = (payload) => ({
  
        type: ERROR_KIDS,
        payload
   
})



export const getKidsData = () => {
        return (dispatch) => {
                dispatch(loadingKids());
                axios.get(`https://urban-touch-0181.herokuapp.com/kids`)
                .then(res => {
                  dispatch(getKids(res.data))
                //   console.log(res.data)
                }
                )
                .catch(err => {dispatch(errorKids(err))}
                )
        }
}
