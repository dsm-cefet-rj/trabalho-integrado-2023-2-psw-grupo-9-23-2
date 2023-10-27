import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [], 
};

const baseUrl = 'http://localhost:8000/carros';

export const fetchCarros = createAsyncThunk('listaCarros/fetchCarros', async () => {
  const response = await axios.get(baseUrl);
  return response.data;
});

export const createCarro = createAsyncThunk('listaCarros/createCarro', async (carroData) => {
  const response = await axios.post(baseUrl, carroData);
  return response.data;
});

export const updateCarro = createAsyncThunk('listaCarros/updateCarro', async (carroData) => {
  const response = await axios.put(`${baseUrl}/${carroData.id}`, carroData);
  return response.data;
});

export const deleteCarro = createAsyncThunk('listaCarros/deleteCarro', async (carroId) => {
  await axios.delete(`${baseUrl}/${carroId}`);
  return carroId;
});

const carroSlice = createSlice({
  name: 'listaCarros',
  
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarros.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCarros.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCarros.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createCarro.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateCarro.fulfilled, (state, action) => {
        const updatedCarro = action.payload;
        const index = state.items.findIndex((carro) => carro.id === updatedCarro.id);
        if (index !== -1) {
          state.items[index] = updatedCarro;
        }
      })
      .addCase(deleteCarro.fulfilled, (state, action) => {
        state.items = state.items.filter((carro) => carro.id !== action.payload);
      });
  },
});

export default carroSlice.reducer;
