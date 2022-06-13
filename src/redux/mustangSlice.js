import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "mustang",
    initialState: [{
            id: 1,
            nome: "Mustang 1",
            ano: "2015",
            velocidade: "180 km/h",
            notaEconomia: "9",
            notaUsuario: "8",
            link: "https://cybergenios.com.br/",
            image: "/static/image11.png",
        },
        {
            id: 2,
            nome: "Mustang 2",
            ano: "2016",
            velocidade: "190 km/h",
            notaEconomia: "9",
            notaUsuario: "5",
            link: "https://cybergenios.com.br/",
            image: "/static/image12.png",
        },
        {
            id: 3,
            nome: "Mustang 3",
            ano: "2017",
            velocidade: "200 km/h",
            notaEconomia: "2",
            notaUsuario: "7",
            link: "https://cybergenios.com.br/",
            image: "/static/image13.png",
        },
        {
            id: 4,
            nome: "Mustang 4",
            ano: "2018",
            velocidade: "210 km/h",
            notaEconomia: "9",
            notaUsuario: "8",
            link: "https://cybergenios.com.br/",
            image: "/static/image14.png",
        },
        {
            id: 5,
            nome: "Mustang 5",
            ano: "2019",
            velocidade: "220 km/h",
            notaEconomia: "9",
            notaUsuario: "8",
            link: "https://cybergenios.com.br/",
            image: "/static/image15.png",
        },
        {
            id: 6,
            nome: "Mustang 6",
            ano: "2020",
            velocidade: "230 km/h",
            notaEconomia: "9",
            notaUsuario: "8",
            link: "https://cybergenios.com.br/",
            image: "/static/image16.png",
        },
        {
            id: 7,
            nome: "Mustang 7",
            ano: "2021",
            velocidade: "240 km/h",
            notaEconomia: "9",
            notaUsuario: "8",
            link: "https://cybergenios.com.br/",
            image: "/static/image17.png",
        },
        {
            id: 8,
            nome: "Mustang 8",
            ano: "1995",
            velocidade: "58 km/h",
            notaEconomia: "3",
            notaUsuario: "10",
            link: "https://cybergenios.com.br/",
            image: "/static/image18.png",
        },
        {
            id: 9,
            nome: "Mustang 9",
            ano: "2015",
            velocidade: "120 km/h",
            notaEconomia: "2",
            notaUsuario: "5",
            link: "https://cybergenios.com.br/",
            image: "/static/image19.png",
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
        removeMustang: (state, action) => {
            state.splice(action.payload, 1)
        },
        updateMustang: (state, action) => {
            state[action.payload.indexSelected].nome = action.payload.nome
            state[action.payload.indexSelected].ano = action.payload.ano
            state[action.payload.indexSelected].velocidade =
                action.payload.velocidade
            state[action.payload.indexSelected].notaEconomia =
                action.payload.notaEconomia
            state[action.payload.indexSelected].notaUsuario =
                action.payload.notaUsuario
            state[action.payload.indexSelected].link = action.payload.link
            state[action.payload.indexSelected].image = action.payload.image
        },
    },
})

export const { addMustang, removeMustang, updateMustang } = slice.actions;

export default slice.reducer;

export const selectMustang = state => state.mustang;