import {CryptoApiBaseURL} from '../../../utils/Constants';
import axios from 'axios';
import { FETCH_CRYPTOCURRENCY_DATA, FETCH_CRYPTOCURRENCY_DATA_FAIL, FETCH_CRYPTOCURRENCY_DATA_SUCESS,FETCH_DATA_BY_ID} from '../../../utils/Constants'

export default function fetchCryptoCurrencyData(){
    return dispatch => {
        dispatch ({type: FETCH_CRYPTOCURRENCY_DATA})

         axios.get(CryptoApiBaseURL)
        .then(res => {
            console.log(res);
            dispatch({type:FETCH_CRYPTOCURRENCY_DATA_SUCESS,payload:res.data})
        })
        .catch(err => {
            dispatch({type:FETCH_CRYPTOCURRENCY_DATA_FAIL,payload:err.data})
        })
    }
}

export const  fetchDataByID = Id => ({
    type:FETCH_DATA_BY_ID,
    payload:Id
})
  



export { fetchCryptoCurrencyData as fetchCryptoCurrencyData };
// export {fetchDataByID as fetchDataByID };
