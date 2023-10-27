import { configureStore } from '@reduxjs/toolkit';
import carroReducer from './slices/carroSlice'; // Import your carroReducer
export const store = configureStore({
  reducer: {
      listaCarros:carroReducer
      //horario:horarioReducer,
      //filtro:filtroReducer
  },
});
