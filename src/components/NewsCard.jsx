import PropTypes from 'prop-types';
import "./NewsCard.css"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNoticiaFavorita } from '../store/noticias/noticiasSlice';
import { deletedNoticiaFavoritaStorage, startSaveLocalStorage } from '../store/noticias/thunks';

export default function NewsCard({titulo, autor, imagen, url, descripcion, fecha, isFavorite = false}) {
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  const [isfavorite , setIsFavorite] = useState(isFavorite);
  const dispach = useDispatch();
  const noticias =useSelector(state => state.noticias.noticiasFavoritas)
 
  const noticiaActual ={
    titulo: titulo,
    autor: autor,
    imagen: imagen,
    url: url,
    descripcion: descripcion,
    fecha: fecha
  }

  


  const handleFavorite = () => {
    if(noticias.find(noticia => noticia.titulo === titulo)){
      setIsFavorite(false);
      dispach(deletedNoticiaFavoritaStorage(noticiaActual))
      return;
    }
    
    dispach(addNoticiaFavorita(noticiaActual))
    dispach(startSaveLocalStorage())
    setIsFavorite(!isfavorite);
    }

  return (
    <div className='card'>
        <div className='contenedor-info'>
          <h2>
            {
              titulo.length > 30
              ? titulo.slice(0, 30) + "..."
              : titulo
            }
          </h2>
          <p className='des-text'>
            {
              descripcion == null ? "No hay descripcion" :
              descripcion.length > 150
              ? descripcion.slice(0, 150) + "..."
              : descripcion
            }
          </p>
          <p className='autor'>
            {
              autor == null ? "No hay autor" :
              autor.length > 30
              ? autor.slice(0, 30) + "..."
              : autor
            }
          </p>
          <div className='con-vmas-icono'> 
            <a href={url} target="_blank">
              ver mas
            </a>
            <div className='icono-corazon'
              onClick={handleFavorite}
            >
            <svg width="512" height="512" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill={isfavorite ? "#b81414" : "#000000"} fillRule="evenodd" d="M4.222 5.364A6.002 6.002 0 0 1 12 4.758a6.002 6.002 0 0 1 7.778 9.091l-5.657 5.657a3 3 0 0 1-4.242 0L4.222 13.85a6 6 0 0 1 0-8.485Z" clipRule="evenodd"/>
            </svg>

            </div>  
          </div>

        </div>

        <div className='contenedor-imagen'>
            <img src={
              urlRegex.test(imagen) ? (
                imagen
              ) : (
                "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
              )
            } alt={titulo} />
            <p className='fecha'>
              {
                fecha == null ? "No hay fecha" :
                fecha.length > 9
                ? fecha.slice(0, 10) 
                : fecha
              }
            </p>
        </div>
    </div>
  )
}

NewsCard.propTypes = {
    titulo: PropTypes.string.isRequired,
    autor: PropTypes.string,
    imagen: PropTypes.string,
    url: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
}