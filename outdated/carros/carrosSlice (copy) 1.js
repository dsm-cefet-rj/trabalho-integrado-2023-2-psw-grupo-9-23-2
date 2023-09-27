import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  carros: [],
  error: null,
  status: 'idle',
};

const API_BASE_URL = 'http://localhost:8000';

// Ação assíncrona para buscar carros
export const fetchCarros = createAsyncThunk('carros/fetchCarros', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/carros`);
    if (!response.ok) {
      throw new Error('Erro na resposta da API');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Ação assíncrona para adicionar um carro
export const addCarro = createAsyncThunk('carros/addCarro', async (carro, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/carros`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carro),
    });
    if (!response.ok) {
      throw new Error('Erro na resposta da API');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Ação assíncrona para atualizar um carro
export const updateCarro = createAsyncThunk('carros/updateCarro', async (carro, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/carros/${carro.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carro),
    });
    if (!response.ok) {
      throw new Error('Erro na resposta da API');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Ação assíncrona para excluir um carro
export const deleteCarro = createAsyncThunk('carros/deleteCarro', async (carroId, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/carros/${carroId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Erro na resposta da API');
    }
    return carroId;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const carrosSlice = createSlice({
  name: 'carros',
  initialState,
  reducers: {    fetchCarrosSuccess: (state, action) => {
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarros.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCarros.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.carros = action.payload;
        state.error = null;
      })
      .addCase(fetchCarros.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addCarro.fulfilled, (state, action) => {
        state.carros.push(action.payload);
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(addCarro.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(updateCarro.fulfilled, (state, action) => {
        const carroAtualizado = action.payload;
        const index = state.carros.findIndex((carro) => carro.id === carroAtualizado.id);
        if (index !== -1) {
          state.carros[index] = carroAtualizado;
          state.status = 'succeeded';
          state.error = null;
        }
      })
      .addCase(updateCarro.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(deleteCarro.fulfilled, (state, action) => {
        const carroIdExcluir = action.payload;
        state.carros = state.carros.filter((carro) => carro.id !== carroIdExcluir);
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(deleteCarro.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
    // ... Adicione tratamento para update e delete também ...
  },
});

export default carrosSlice.reducer;
