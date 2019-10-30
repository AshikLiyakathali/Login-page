import { takeEvery, call, put, select, take, fork, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import { GetDataFromServer, deleteTodoAPI } from '../service';

const baseUrl = 'https://sleepy-basin-37644.herokuapp.com';
const baseUrl2 = 'https://fierce-crag-76882.herokuapp.com';
const aws = 'http://18.222.167.189:5000';

function* fetchLoginUser(action) {
    try {
      console.log("Action->" + JSON.stringify(action));
      let formBody = {};
      formBody.firstname = "asdfg";//action.code;
      formBody.lastname = "zxcvbb"; //action.provider;
//const reqMethod = "POST";
const reqMethod = "GET";
const loginUrl = baseUrl + '/view';
const response = yield call(GetDataFromServer, loginUrl, '', '');
const result = yield response.json();
    console.log("ADS" + result.workingdetails);
    console.log("Result ->" + JSON.stringify(result))
    console.log('Result Json' + result);
    if (result.error) {
      yield put({ type: "LOGIN_USER_SERVER_REPONSE_ERROR", error: result.error });
    } else {
      yield put({ type: Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS, result });
    }
  } catch (error) {
    // yield put({ type: Types.SERVER_CALL_FAILED, error: error.message });
    console.log(error);
  }
}  


function* signUpUser(action) {
    try {
      console.log("Submit Action->" + JSON.stringify(action));
      let formBody = {};
      formBody.user = action.user;
  
      const signUpUrl = baseUrl2 + "/user/create";
      const response = yield call(
        GetDataFromServer,
        signUpUrl,
        "POST",
        formBody.user
      );
      const result = yield response.json();
      console.log("Result Json" + result);
      if (result.error) {
        yield put({
          type: "SIGNUP_USER_SERVER_RESPONSE_ERROR",
          error: result.error
        });
      } else {
        yield put({ type: Types.SIGNUP_USER_SERVER_RESPONSE_SUCCESS, result });
      }
    } catch (error) {
      // yield put({ type: Types.SERVER_CALL_FAILED, error: error.message });
      console.log(error);
    }
  }

  export default function* rootSaga(params) {
    yield takeLatest(Types.LOGIN_USER, fetchLoginUser);
    yield takeEvery(Types.SIGNUP_USER, signUpUser);
    console.log("ROOT SAGA");

}
