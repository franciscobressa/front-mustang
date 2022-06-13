import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "mustang",
    initialState: [{
            id: 1,
            nome: "Mustang 1",
            ano: "2015",
            velocidade: "180 km/h",
            notaEconomia: "9/10",
            notaUsuario: "8/10",
            link: "https://www.mustang.com.br/",
            image: "/static/image11.png",
        },
        {
            id: 2,
            nome: "Mustang 2",
            ano: "2016",
            velocidade: "190 km/h",
            notaEconomia: "9/10",
            notaUsuario: "5/10",
            link: "https://www.mustang.com.br/",
            image: "/static/image12.png",
        },
        {
            id: 3,
            nome: "Mustang 3",
            ano: "2017",
            velocidade: "200 km/h",
            notaEconomia: "2/10",
            notaUsuario: "7/10",
            link: "https://www.mustang.com.br/",
            image: "/static/image13.png",
        },
        {
            id: 4,
            nome: "Mustang 4",
            ano: "2018",
            velocidade: "210 km/h",
            notaEconomia: "9/10",
            notaUsuario: "8/10",
            link: "https://www.mustang.com.br/",
            image: "/static/image14.png",
        },
        {
            id: 5,
            nome: "Mustang 5",
            ano: "2019",
            velocidade: "220 km/h",
            notaEconomia: "9/10",
            notaUsuario: "8/10",
            link: "https://www.mustang.com.br/",
            image: "/static/image15.png",
        },
    ],
    reducers: {
        addMustang: (state, action) => {
            const newMustang = {
                id: state.length + 1,
                nome: action.payload.nome,
                ano: action.payload.ano,
                velocidade: action.payload.velocidade,
                notaEconomia: action.payload.notaEconomia,
                notaUsuario: action.payload.notaUsuario,
                link: action.payload.link,
                image: action.payload.image,
            }

            state.push(newMustang)
        },
    },
})

export const { addMustang } = slice.actions;

export default slice.reducer;

export const selectMustang = state => state.mustang;