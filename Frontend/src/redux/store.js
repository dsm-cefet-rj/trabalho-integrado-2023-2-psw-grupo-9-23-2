import { configureStore } from '@reduxjs/toolkit';
import carroReducer from './slices/carroSlice'; 
//import horarioReducer
//import filtroReducer
export const store = configureStore({
  reducer: {
      listaCarros:carroReducer
      //horario:horarioReducer,
      //filtro:filtroReducer
  },
});
