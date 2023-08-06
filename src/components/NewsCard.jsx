import PropTypes from 'prop-types';
import "./NewsCard.css"

export default function NewsCard({titulo, autor, imagen, url, descripcion, fecha}) {
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

  return (
    <div className='card'>
        <a href={url}>
            <h2>{titulo}</h2>
        </a>
        
        <div className='contenedor-img'>
      
      {urlRegex.test(imagen) ? (
        <img src={imagen} alt={titulo} />
      ) : (
        <img src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" alt={titulo} />
      )}
          
          <div className='des'>
            <p>{descripcion}</p>
            <div className='nombre'>
              <p >{autor || "No hay autor"}</p>
            </div>

            <p className='fecha'>{fecha.slice(0, 10)}</p>
          </div>
          
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