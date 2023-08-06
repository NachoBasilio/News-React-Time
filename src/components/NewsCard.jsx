import PropTypes from 'prop-types';
import "./NewsCard.css"

export default function NewsCard({titulo, autor, imagen, url, descripcion, fecha}) {

  return (
    <div className='card'>
        <a href={url}>
            <h2>{titulo}</h2>
        </a>
        <p className='nombre'>{autor}</p>
        <div className='contenedor-img'>
          <img src={
              imagen || "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
          } alt={titulo} />
          <div className='des'>
            <p>{descripcion}</p>
          </div>
          
        </div>

        <p className='fecha'>{fecha}</p>
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