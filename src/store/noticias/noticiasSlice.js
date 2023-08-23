import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    noticiasFavoritas: []
}

const noticiasSlice = createSlice({
  name: "noticias",
  initialState,
  reducers: {
    addNoticiaFavorita(state, action) {
        state.noticiasFavoritas.push(action.payload)
    },
    removeNoticiaFavorita(state, action) {
        state.noticiasFavoritas = state.noticiasFavoritas.filter(noticia => noticia.id !== action.payload.id)
    }
  }
});

export const {
    addNoticiaFavorita,
    removeNoticiaFavorita
} = noticiasSlice.actions

export default noticiasSlice.reducer