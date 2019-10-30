import * as actions from './actions';
import { types } from '@babel/core';

const initialUserObj = {
    "signUpUsersList": [],
    "pending" : false,
    "loggedIn" : false,
    "user": {
        "email" : "",
        "name" : "",
        "password": ""
 }
};

const loginServerResponseSuccess =(state, action) => {
    console.log("Redux" + JSON.stringify(action));
    let newState = {...state};
    if(action.result !== undefined) {
        newState = Object.assign({}, state, {"result": Object.assign({}, action.result) })
    }
    console.log("STATE->" + JSON.stringify(newState));
    return {...newState};
}

const loginServerResponseError = (state, action) => {
    let newState = {...state};
    return {...newState};
}

export default (state = initialUserObj, action) => {
    switch(action.type) {
        case types.LOGIN_USER:
            return Object.assign({}, state, {"loggedIn": false, "pending": true });
        case types.LOGIN_USER_SERVER_RESPONSE_ERROR:
            return loginServerResponseError(state);
        case types.LOGIN_USER_SERVER_RESPONSE_SUCCESS:
            return loginServerResponseSuccess(state, action);

        default:
            return state;
            
    }
}