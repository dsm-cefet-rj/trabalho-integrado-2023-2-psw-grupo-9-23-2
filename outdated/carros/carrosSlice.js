import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
    items: [],
    status: null,
}

export const carrosFetch = createAsyncThunk(
    "carros/carrosFetch",
    async () => {
            const response = await (await fetch('http://localhost:8000/carros')).json();
            return response   
    }
);



const carrosSlice = createSlice({
    name: "carros",
    initialState,
    reducers: {
        add(state,action) {
            console.log(action.payload);
            const lastId = state.items.length + 1;
            const newCarro = action.payload;
            newCarro['id'] = lastId;
            newCarro[ "imgLink"] = "public/Antigos/antigo1.PNG";
            newCarro['nome'] = "Fusca 1994";
            newCarro['km'] = "800";
            newCarro['marca'] = "Ford";
            newCarro['valor'] = "3000";
            newCarro['isAntigo'] = true;
            
          
            state.items.push(newCarro);

        },
    },
    extraReducers: {
        [carrosFetch.pending]: (state, action) => {
            state.status = "pending"
        },
        [carrosFetch.fulfilled]: (state, action) => {
            state.status = "success"
            state.items = action.payload
        },
        [carrosFetch.rejected]: (state, action) => {
            state.status = "rejected"
        }
    }
});

export const { addToStore } = carrosSlice.actions;
export default carrosSlice.reducer;