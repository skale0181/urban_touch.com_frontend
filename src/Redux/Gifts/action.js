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
export const getGiftsFilterData = (x) => {
        return (dispatch) => {
                dispatch(loadingGIFTS());
                axios.get(`https://urban-touch-0181.herokuapp.com/gifts`)
                .then(res => {

                        if(x==1){
                                dispatch(getGIFTS(res.data.filter(y => y.price < 100)))
                        }
                        else if(x==2){
                                dispatch(getGIFTS(res.data.filter(y => y.price >= 100 && y.price < 300)))
                        }
                        else if(x==3){
                                dispatch(getGIFTS(res.data.filter(y => y.price >= 300 && y.price < 500)))
                        }
                        else if(x==4){
                                dispatch(getGIFTS(res.data.filter(y => y.price >= 500)))
                        }
                }
                )
                .catch(err => {dispatch(errorGIFTS(err))}
                )
        }
}