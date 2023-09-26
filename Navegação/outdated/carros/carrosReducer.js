import { FETCH_CARROS_SUCCESS, ADD_CARRO_SUCCESS, UPDATE_CARRO_SUCCESS, DELETE_CARRO_SUCCESS } from './carrosActions';

const initialState = {
  carros: [],
};

export const carrosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARROS_SUCCESS:
      return {
        ...state,
        carros: action.payload,
      };
    case ADD_CARRO_SUCCESS:
      return {
        ...state,
        carros: [...state.carros, action.payload],
      };
    case UPDATE_CARRO_SUCCESS:
      const carroAtualizado = action.payload;
      const carrosAtualizados = state.carros.map((carro) =>
        carro.nome === carroAtualizado.nome ? carroAtualizado : carro
      );
      return {
        ...state,
        carros: carrosAtualizados,
      };
    case DELETE_CARRO_SUCCESS:
      const carroIdExcluir = action.payload;
      const carrosRestantes = state.carros.filter(
        (carro) => carro.id !== carroIdExcluir
      );
      return {
        ...state,
        carros: carrosRestantes,
      };
    default:
      return state;
  }
};



