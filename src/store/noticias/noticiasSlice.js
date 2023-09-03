import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    noticiasFavoritas: [],
    noticiasEnElStorage: []
}

const noticiasSlice = createSlice({
  name: "noticias",
  initialState,
  reducers: {
    addNoticiaFavorita(state, action) {
        if(state.noticiasFavoritas.find(noticia => noticia.titulo === action.payload.titulo)) {
            return
        }
        state.noticiasFavoritas.push(action.payload)
    },
    removeNoticiaFavorita(state, action) {
        state.noticiasFavoritas = state.noticiasFavoritas.filter(noticia => noticia.titulo !== action.payload.titulo)
    },
    setNoticiasEnElStorage(state, action) {
        state.noticiasEnElStorage = action.payload
    }
  }
});

export const {
    addNoticiaFavorita,
    removeNoticiaFavorita,
    setNoticiasEnElStorage
} = noticiasSlice.actions

export default noticiasSlice.reducer