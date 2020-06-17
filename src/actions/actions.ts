import { Dispatch } from 'redux';

import RegistrationService from '../services/RegistrationService';

import User from '../models/User';

// Steps
export const NEXT_STEP = 'NEXT_STEP';
export const PREV_STEP = 'PREV_STEP';
export const FINAL_STEP_OK = 'FINAL_STEP_OK';
export const FINAL_STEP_ERROR = 'FINAL_STEP_ERROR';

// Registration
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

// User details
export const SET_NAME = 'SET_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';

export const userActions = {
  register,
};

function register(user: User) {
  return (dispatch: Dispatch) => {
    if (user) {
      dispatch(request());

      RegistrationService.register(user)
      .then(res => {
        console.log(res);
        console.log(res.data);
        dispatch(success());
        dispatch({ type: FINAL_STEP_OK });
      })
      .catch(error => {
        dispatch(failure(error));
        dispatch({ type: FINAL_STEP_ERROR });
      });
    }
  };

  function request() {
    return { type: REGISTER_REQUEST };
  }
  function success() {
    return { type: REGISTER_SUCCESS };
  }
  function failure(error: any) {
    return { type: REGISTER_FAILURE, error };
  }
}
