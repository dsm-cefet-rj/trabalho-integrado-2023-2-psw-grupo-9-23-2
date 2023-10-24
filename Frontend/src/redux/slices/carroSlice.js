import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  status: 'idle',
  error: null,
  isAntigo: false,
  nome: "Generico",
  imgLink: "public/Antigos/antigo1.PNG",
  km: "0",
  marca: "default",
  valor: "0",
};

const baseUrl = 'http://localhost:8000/carros';


export const fetchCarro = createAsyncThunk('carro/fetchCarro', async () => {
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

const carroSlice = createSlice({
  name: 'carro',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarro.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCarro.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isAntigo = action.payload.isAntigo;
        state.nome = action.payload.nome;
        state.imgLink = action.payload.imgLink;
        state.km = action.payload.km;
        state.marca = action.payload.marca;
        state.valor = action.payload.valor;
      })
      .addCase(fetchCarro.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createCarro.fulfilled, (state, action) => {
        state.isAntigo = action.payload.isAntigo;
        state.nome = action.payload.nome;
        state.imgLink = action.payload.imgLink;
        state.km = action.payload.km;
        state.marca = action.payload.marca;
        state.valor = action.payload.valor;
      })
      .addCase(updateCarro.fulfilled, (state, action) => {
        state.isAntigo = action.payload.isAntigo;
        state.nome = action.payload.nome;
        state.imgLink = action.payload.imgLink;
        state.km = action.payload.km;
        state.marca = action.payload.marca;
        state.valor = action.payload.valor;
      })
      .addCase(deleteCarro.fulfilled, (state, action) => {
        state.isAntigo = false;
        state.nome = "Generico";
        state.imgLink = "public/Antigos/antigo1.PNG";
        state.km = "0";
        state.marca = "default";
        state.valor = "0";
      });
  },
});

export default carroSlice.reducer;