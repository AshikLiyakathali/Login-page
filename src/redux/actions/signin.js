import * as actions from './actions';

export const loginUser = (username, password) => {

    return {
      type: Types.LOGIN_USER,
      username,
      password
  
    }
  
  }