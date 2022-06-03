import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "mustang",
  initialState: {
    mustangs: [
      {
        id: 1,
        nome: "Mustang 1",
        ano: "2015",
        velocidade: "180 km/h",
        notaEconomia: "9/10",
        notaUsuario: "8/10",
      },
      {
        id: 2,
        nome: "Mustang 2",
        ano: "2016",
        velocidade: "190 km/h",
        notaEconomia: "9/10",
        notaUsuario: "5/10",
      },
      {
        id: 3,
        nome: "Mustang 3",
        ano: "2017",
        velocidade: "200 km/h",
        notaEconomia: "2/10",
        notaUsuario: "7/10",
      },
    ]
  },
  reducers: {
    addMustang: (state, {payload}) => {
      state.mustang.push(payload);
    } 
  }
});

export const { addMustang } = slice.actions;

export default slice.reducer;

export const selectMustang = state => state.mustang;