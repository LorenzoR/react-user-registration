import * as ActionTypes from '../actions/actions';

const initialState = {
  registering: false,
  error: false,
  user: {
    name: '',
    email: '',
    password: '',
  },
};

export function registration(state = initialState, action: { payload: string, type: string }) {
  switch (action.type) {
    case ActionTypes.REGISTER_REQUEST:
      return { registering: true };
    case ActionTypes.REGISTER_SUCCESS:
      return { registering: false, error: false };
    case ActionTypes.REGISTER_FAILURE:
      return { registering: false, error: true };
    case ActionTypes.SET_EMAIL:
      return { ...state, user: { ...state.user, email: action.payload } };
    case ActionTypes.SET_NAME:
      return { ...state, user: { ...state.user, name: action.payload } };
    case ActionTypes.SET_PASSWORD:
      return { ...state, user: { ...state.user, password: action.payload } };
    default:
      return state
  }
};
