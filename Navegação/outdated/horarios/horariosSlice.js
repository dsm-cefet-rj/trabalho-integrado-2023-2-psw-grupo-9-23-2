import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
    items: [],
    status: null,
}

export const horariosFetch = createAsyncThunk(
    "horarios/horariosFetch",
    async () => {
            const response = await (await fetch('http://localhost:8000/horarios')).json();
            return response   
    }
);



const horariosSlice = createSlice({
    name: "horarios",
    initialState,
    reducers: {
        add(state,action) {
            console.log(action.payload);
            const lastId = state.items.length + 1;
            const newHorario = action.payload;
            newHorario['id'] = lastId;
            newHorario[ "isOcupado"] = false;
            newHorario['dia'] = "02/10";
            newHorario["hora"] = "09:30";
    
            state.items.push(newHorario);

        },
    },
    extraReducers: {
        [horariosFetch.pending]: (state, action) => {
            state.status = "pending"
        },
        [horariosFetch.fulfilled]: (state, action) => {
            state.status = "success"
            state.items = action.payload
        },
        [horariosFetch.rejected]: (state, action) => {
            state.status = "rejected"
        }
    }
});

export const { addHorario } = horariosSlice.actions;
export default horariosSlice.reducer;