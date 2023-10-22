import { CreateSlice } from "@reduxjs/toolkit";

const initialState={
    
    isAntigo: false,
    nome: "Generico",
    imgLink: "public/Antigos/antigo1.PNG",
    km: "0",
    marca: "default",
    valor: "0",
}

const carroSlice= createSlice({
    name:carro,
    initialState,
    reducers:{
        
    }
});
console.log(carroSlice);


export default carroSlice.reducer;