import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function selectedDataReducer(
  state = initialState.selectedData,
  action,
) {
  switch (action.type) {
    case actionTypes.SELECTED_DATA:
      return action.payload;
    default:
      return state;
  }
}
