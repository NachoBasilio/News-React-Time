import { addNoticiaFavorita, removeNoticiaFavorita } from "./noticiasSlice";

export const startSaveLocalStorage = () => {
    return (dispatch, getState) => {
        const { noticias } = getState();
        console.log(noticias)
        localStorage.setItem('noticiasFavoritas', JSON.stringify(noticias.noticiasFavoritas));
    }
}


export const deletedNoticiaFavoritaStorage = (noticiaCurrent) => {
    return (dispatch, getState) => {
        const { noticias } = getState();
        const noticiasFavoritas = noticias.noticiasFavoritas.filter(noticia => noticia.titulo !== noticiaCurrent.titulo)
        dispatch(removeNoticiaFavorita(noticiaCurrent))
        localStorage.setItem('noticiasFavoritas', JSON.stringify(noticiasFavoritas));
    }
}


