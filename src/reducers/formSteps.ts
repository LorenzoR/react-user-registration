import * as ActionTypes from '../actions/actions';

const FINAL_STEP = 3;

const initialState = {
  step: 1,
  error: false,
};

export function formSteps(state = initialState, action: { id: string, type: string }) {
  switch (action.type) {
    case ActionTypes.NEXT_STEP:
      return { step: state.step + 1 };
    case ActionTypes.PREV_STEP:
      return { step: state.step - 1 };
    case ActionTypes.FINAL_STEP_OK:
      return { step: FINAL_STEP, error: false };
    case ActionTypes.FINAL_STEP_ERROR:
      return { step: FINAL_STEP, error: true };
    default:
      return state
  }
}
