import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function getDataReducer(state = initialState.allData, action) {
  switch (action.type) {
    case actionTypes.GET_DATA:
      return action.payload;
    default:
      return state;
  }
}
