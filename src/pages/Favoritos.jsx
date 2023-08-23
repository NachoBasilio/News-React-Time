import React from 'react'
import "./Favoritos.css"
import { useSelector } from 'react-redux'
import NewsCard from '../components/NewsCard'

export default function Favoritos() {
  const noticias = useSelector(state => state.noticias.noticiasFavoritas)

  return (
    <>
      <div className="contenedor-favorito">
        <h1>Favoritos:</h1>
        {
          noticias.length === 0 ? 
          <h2>No hay noticias favoritas</h2> :
          noticias.map((noticia) => (
            <NewsCard
              key={noticia.titulo}
              titulo={noticia.titulo}
              autor={noticia.autor}
              imagen={noticia.imagen}
              url={noticia.url}
              descripcion={noticia.descripcion}
              fecha={noticia.fecha}
              isFavorite={true}
            ></NewsCard>))
          
        }
      </div>
    </>
  )
}
