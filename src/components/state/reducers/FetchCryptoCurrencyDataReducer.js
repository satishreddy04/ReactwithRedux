import { FETCH_CRYPTOCURRENCY_DATA, 
    FETCH_CRYPTOCURRENCY_DATA_FAIL, 
    FETCH_CRYPTOCURRENCY_DATA_SUCESS,
    FETCH_DATA_BY_ID } 
    from '../../../utils/Constants'


// INITIALIZE STATE

const initialState = {
    cryptoData: [],
    Fetching: false,
    fetched: false,
    failed: false,
    Detailpage:[]
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
    failed: false,
    Detailpage:[]

            };
        case FETCH_CRYPTOCURRENCY_DATA_SUCESS:
            return {
                ...state,
                cryptoData: action.payload,
    Fetching: false,
    fetched: true,
    failed: false,
    Detailpage:[]
            };
        case  FETCH_CRYPTOCURRENCY_DATA_FAIL:
            return {
                ...state,
                cryptoData:action.payload,
    Fetching: false,
    fetched: false,
    failed: true,
    Detailpage:[]
            };
            case FETCH_DATA_BY_ID :
            let selectedObj = state.cryptoData.find(o => o.id === action.payload);
            return {
                ...state,
                Detailpage:[selectedObj]

            }
        default:
            return state;
    }
};