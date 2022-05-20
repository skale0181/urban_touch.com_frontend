import axios from "axios";

export  const GET_WOMENS = 'GET_WOMENS';
export const LODDING_WOMENS = 'LODDING_WOMENS';
export const ERROR_WOMENS = 'ERROR_WOMENS';

export const getwomens = (payload) => ({
    
        type: GET_WOMENS,
        payload
    
})

export const loadingwomens = () =>( {
   
        type: LODDING_WOMENS
   
})

export const errorwomens = (payload) => ({
  
        type: ERROR_WOMENS,
        payload
   
})


export const getWomensData = () => {
        return (dispatch) => {
                dispatch(loadingwomens());
                axios.get(`https://urban-touch-0181.herokuapp.com/womens`)
                .then(res => {
                  dispatch(getwomens(res.data))
                //   console.log(res.data)
                }
                )
                .catch(err => {dispatch(errorwomens(err))}
                )
        }
}
