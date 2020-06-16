import { combineReducers } from 'redux';
import { registration } from './registration';
import { formSteps } from './formSteps';

export default combineReducers({
  registration,
  formSteps,
});