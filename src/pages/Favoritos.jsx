import React, { useEffect } from 'react';
import "./Favoritos.css";
import { useDispatch, useSelector } from 'react-redux';
import NewsCard from '../components/NewsCard';
import { addNoticiaFavorita } from '../store/noticias/noticiasSlice';

export default function Favoritos() {
  const [noticias, setNoticias] = React.useState([]);
  const noticiasSele = useSelector(state => state.noticias.noticiasFavoritas);

  useEffect(() => {
    const storedNoticias = JSON.parse(localStorage.getItem('noticiasFavoritas')) || [];
    setNoticias(storedNoticias);
  }, [noticiasSele]);


  

  return (
    <>
      <div className="contenedor-favorito">
        <h1>Favoritos:</h1>
        <div className='contendeor-de-noticias'>
          {noticias.length === 0 ? (
            <h2>No hay noticias favoritas</h2>
          ) : (
            noticias.map(noticia => (
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
