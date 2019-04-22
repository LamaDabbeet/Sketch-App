import { Actions } from 'react-native-router-flux';
import {
  NAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';
import axios from 'axios';


export const nameChanged = (text) => {
  return {
    type: NAME_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};


export const loginUser = ({ name, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    debugger;
    axios
      .post('https://calm-sands-26165.herokuapp.com/api/users/login', { name, password })
      .then(res => {
        debugger;
        console.log(res)
        loginUserSuccess(dispatch)

      })
      .catch(() => loginUserFail(dispatch));

  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};


const loginUserSuccess = (dispatch) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,

  });

  Actions.main();
};
