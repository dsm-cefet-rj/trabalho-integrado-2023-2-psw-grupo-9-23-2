import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [], // Manage an array of items
};

const baseUrl = 'http://localhost:8000/carros';

export const fetchCarros = createAsyncThunk('carro/fetchCarros', async () => {
  const response = await axios.get(baseUrl);
  return response.data;
});

export const createCarro = createAsyncThunk('carro/createCarro', async (carroData) => {
  const response = await axios.post(baseUrl, carroData);
  return response.data;
});

export const updateCarro = createAsyncThunk('carro/updateCarro', async (carroData) => {
  const response = await axios.put(`${baseUrl}/${carroData.id}`, carroData);
  return response.data;
});

export const deleteCarro = createAsyncThunk('carro/deleteCarro', async (carroId) => {
  await axios.delete(`${baseUrl}/${carroId}`);
  return carroId;
});

export const carroSlice = createSlice({
  name:'ativos',
  initialState: [],
  reducers:{
      createCarro: (state,action) => createCarroReducer(state,action.payload),
      updateCarro: (state,action) => updateCarroReducer(state,action.payload),
      deleteCarro: (state,action) => deleteCarroReducer(state,action.payload)
  },
  extraReducers:{
    [fetchCarros.fulfilled]: (state,action)=>fullfillCarrosReducer(state, action.payload)
  }
})
export default carroSlice.reducer;
