import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  carros: [],
  error: null,
};


const carrosSlice = createSlice({
  name: 'carros',
  initialState,
  reducers: {
    fetchCarrosSuccess: (state, action) => {
      state.carros = action.payload;
      state.error = null;
    },
    fetchCarrosFailure: (state, action) => {
      state.error = action.payload;
    },


    addCarroSuccess: (state, action) => {
      state.carros.push(action.payload);
      state.error = null;
    },
    addCarroFailure: (state, action) => {
      state.error = action.payload;
    },


    updateCarroSuccess: (state, action) => {
      const carroAtualizado = action.payload;
      const index = state.carros.findIndex((carro) => carro.id === carroAtualizado.id);
      if (index !== -1) {
        state.carros[index] = carroAtualizado;
        state.error = null;
      }
    },
    updateCarroFailure: (state, action) => {
      state.error = action.payload;
    },


    deleteCarroSuccess: (state, action) => {
      const carroIdExcluir = action.payload;
      state.carros = state.carros.filter((carro) => carro.id !== carroIdExcluir);
      state.error = null;
    },
    deleteCarroFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  fetchCarrosSuccess,
  fetchCarrosFailure,
  addCarroSuccess,
  addCarroFailure,
  updateCarroSuccess,
  updateCarroFailure,
  deleteCarroSuccess,
  deleteCarroFailure,
} = carrosSlice.actions;
export default carrosSlice.reducer;
