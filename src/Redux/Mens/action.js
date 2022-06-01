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
export const getMensFilterData = (x) => {
        return (dispatch) => {
                dispatch(loadingmens());
                axios.get(`https://urban-touch-0181.herokuapp.com/mens`)
                .then(res => {

                        if(x==1){
                                dispatch(getmens(res.data.filter(y => y.price < 100)))
                        }
                        else if(x==2){
                                dispatch(getmens(res.data.filter(y => y.price >= 100 && y.price < 300)))
                        }
                        else if(x==3){
                                dispatch(getmens(res.data.filter(y => y.price >= 300 && y.price < 500)))
                        }
                        else if(x==4){
                                dispatch(getmens(res.data.filter(y => y.price >= 500)))
                        }
                }
                )
                .catch(err => {dispatch(errormens(err))}
                )
        }
}
