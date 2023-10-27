import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [], // Manage an array of items
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
        state.items = action.payload; // Update the items array with fetched data
      })
      .addCase(fetchCarros.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createCarro.fulfilled, (state, action) => {
        state.items.push(action.payload); // Add the new carro to the items array
      })
      .addCase(updateCarro.fulfilled, (state, action) => {
        // Update the existing carro in the items array
        const updatedCarro = action.payload;
        const index = state.items.findIndex((carro) => carro.id === updatedCarro.id);
        if (index !== -1) {
          state.items[index] = updatedCarro;
        }
      })
      .addCase(deleteCarro.fulfilled, (state, action) => {
        // Remove the deleted carro from the items array
        state.items = state.items.filter((carro) => carro.id !== action.payload);
      });
  },
});

export default carroSlice.reducer;
