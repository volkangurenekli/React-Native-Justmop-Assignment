import {combineReducers} from 'redux';
import getData from './getData';
import selectedData from './selectedData';
import mechanics from './mechanics';

const rootReducer = combineReducers({getData, selectedData, mechanics});

export default rootReducer;
