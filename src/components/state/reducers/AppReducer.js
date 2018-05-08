// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS

import { FetchZipCodesReducer } from '../reducers/FetchZipCodesReducer';
import {FetchcryptoCurrencyDataReducer} from '../reducers/FetchCryptoCurrencyDataReducer';


// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    zipCodes: FetchZipCodesReducer,
    crytpodata:FetchcryptoCurrencyDataReducer

});