import { combineReducers } from 'redux';
import { RESET_APP } from '../types/appType';
import webReducer from './webReducer';

export const appReducer = combineReducers({
  webReducer,
});

export const rootReducer = (state: any, action: any) => {
  if (action.type === RESET_APP) {
    state = undefined;
  }
  return appReducer(state, action);
};
