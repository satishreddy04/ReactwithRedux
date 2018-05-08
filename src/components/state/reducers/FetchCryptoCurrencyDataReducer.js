import { FETCH_CRYPTOCURRENCY_DATA, 
    FETCH_CRYPTOCURRENCY_DATA_FAIL, 
    FETCH_CRYPTOCURRENCY_DATA_SUCESS } 
    from '../../../utils/Constants'


// INITIALIZE STATE

const initialState = {
    cryptoData: [],
    Fetching: false,
    fetched: false,
    failed: false
};


// REDUCER

export const FetchcryptoCurrencyDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CRYPTOCURRENCY_DATA:
            return {
                ...state,
                cryptoData:[],
    Fetching: true,
    fetched: false,
    failed: false
            };
        case FETCH_CRYPTOCURRENCY_DATA_SUCESS:
            return {
                ...state,
                cryptoData: action.payload,
    Fetching: false,
    fetched: true,
    failed: false
            };
        case  FETCH_CRYPTOCURRENCY_DATA_FAIL:
            return {
                ...state,
                cryptoData:action.payload,
    Fetching: false,
    fetched: false,
    failed: true
            };
        default:
            return state;
    }
};