import { combineReducers } from 'redux';
import { listarUsuarios } from './usuarios'

const rootReducer = combineReducers({
  app: listarUsuarios
});

export default rootReducer;
