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
export const getKidsFilterData = (x) => {
        return (dispatch) => {
                dispatch(loadingKids());
                axios.get(`https://urban-touch-0181.herokuapp.com/kids`)
                .then(res => {

                        if(x==1){
                                dispatch(getKids(res.data.filter(y => y.price < 100)))
                        }
                        else if(x==2){
                                dispatch(getKids(res.data.filter(y => y.price >= 100 && y.price < 300)))
                        }
                        else if(x==3){
                                dispatch(getKids(res.data.filter(y => y.price >= 300 && y.price < 500)))
                        }
                        else if(x==4){
                                dispatch(getKids(res.data.filter(y => y.price >= 500)))
                        }
                }
                )
                .catch(err => {dispatch(errorKids(err))}
                )
        }
}