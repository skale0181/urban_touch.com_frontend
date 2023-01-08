import axios from "axios";
import { WOMEN_APPARELS } from "../../Api_helper/api_helper";

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
                axios.get(WOMEN_APPARELS)
                .then(res => {
                  dispatch(getwomens(res.data))
                //   console.log(res.data)
                }
                )
                .catch(err => {dispatch(errorwomens(err))}
                )
        }
}
export const getWomensFilterData = (x) => {
        return (dispatch) => {
                dispatch(loadingwomens());
                axios.get(WOMEN_APPARELS)
                .then(res => {

                        if(x==1){
                                dispatch(getwomens(res.data.filter(y => y.price < 100)))
                        }
                        else if(x==2){
                                dispatch(getwomens(res.data.filter(y => y.price >= 100 && y.price < 300)))
                        }
                        else if(x==3){
                                dispatch(getwomens(res.data.filter(y => y.price >= 300 && y.price < 500)))
                        }
                        else if(x==4){
                                dispatch(getwomens(res.data.filter(y => y.price >= 500)))
                        }
                }
                )
                .catch(err => {dispatch(errorwomens(err))}
                )
        }
}