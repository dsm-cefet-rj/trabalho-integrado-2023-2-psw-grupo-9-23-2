import { combineReducers } from 'redux';
import carrosReducer from './carros/carrosReducer';
import horariosSlice from "./horarios/horariosSlice";

// Importar os outros reducers

const rootReducer = combineReducers({
  carros: carrosSlice,
  horarios: horariosSlice,
  // Adicionar outros reducers aqui
});

export default rootReducer;