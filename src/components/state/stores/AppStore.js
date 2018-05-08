// IMPORT PACKAGE REFERENCES

import { createStore, applyMiddleware } from 'redux';

// IMPORT MIDDLEWARE
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

// IMPORT REDUCERS

import { AppReducer } from '../reducers/AppReducer';



// CONFIGURE STORE

export const createAppStore = () => {
    return createStore(AppReducer, applyMiddleware(thunk,logger, promiseMiddleware()));
};