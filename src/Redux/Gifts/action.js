import axios from "axios";

export  const GET_GIFTS = 'GET_GIFTS';
export const LODDING_GIFTS = 'LODDING_GIFTS';
export const ERROR_GIFTS = 'ERROR_GIFTS';

export const getGIFTS = (payload) => ({
    
        type: GET_GIFTS,
        payload
    
})

export const loadingGIFTS = () =>( {
   
        type: LODDING_GIFTS
   
})

export const errorGIFTS = (payload) => ({
  
        type: ERROR_GIFTS,
        payload
   
})


export const getGIFTSData = () => {
        return (dispatch) => {
                dispatch(loadingGIFTS());
                axios.get(`https://urban-touch-0181.herokuapp.com/gifts`)
                .then(res => {
                  dispatch(getGIFTS(res.data))
                //   console.log(res.data)
                }
                )
                .catch(err => {dispatch(errorGIFTS(err))}
                )
        }
}
