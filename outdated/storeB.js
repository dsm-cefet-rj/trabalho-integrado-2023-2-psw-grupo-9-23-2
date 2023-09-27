import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer.js'; // Import do rootReducer




export const store = configureStore({
  reducer: rootReducer // Reducer raiz que combina todos os reducers

  
  //middleware: (getDefaultMiddleware) => {
    //return getDefaultMiddleware().concat(/* Seus middlewares personalizados aqui */);},
  // Outras opções de configuração, se necessário
});
