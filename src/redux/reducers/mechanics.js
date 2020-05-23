import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function mechanicsReducer(
  state = initialState.mechanics,
  action,
) {
  switch (action.type) {
    case actionTypes.MECHANICS:
      return action.payload;
    default:
      return state;
  }
}
