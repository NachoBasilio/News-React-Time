import React, { useEffect } from 'react';
import "./Favoritos.css";
import { useDispatch, useSelector } from 'react-redux';
import NewsCard from '../components/NewsCard';
import { addNoticiaFavorita } from '../store/noticias/noticiasSlice';
import { localStorageGet } from '../helpers/localStorageGet';

export default function Favoritos() {
  const dispatch = useDispatch();
  const noticiasSele = useSelector(state => state.noticias.noticiasFavoritas);
  const noticiasYaGuardadas = localStorageGet("noticiasFavoritas");

  useEffect(() => {
    if (noticiasYaGuardadas.length > 0) {
      noticiasYaGuardadas.forEach(noticia => {
        dispatch(addNoticiaFavorita(noticia));
      });
    }
  }, []);
  

  return (
    <>
      <div className="contenedor-favorito">
        <h1>Favoritos</h1>
        <div className='contendeor-de-noticias'>
          {noticiasSele.length === 0 ? (
            <h2>No hay noticias favoritas</h2>
          ) : (
            noticiasSele.map(noticia => (
              <NewsCard
              
                key={noticia.titulo}
                titulo={noticia.titulo}
                autor={noticia.autor}
                imagen={noticia.imagen}
                url={noticia.url}
                descripcion={noticia.descripcion}
                fecha={noticia.fecha}
                isFavorite={true}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
