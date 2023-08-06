import PropTypes from 'prop-types';
import "./NewsCard.css"

export default function NewsCard({titulo, autor, imagen, url, descripcion, fecha}) {
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

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
          <a href={url}>
            ver mas
          </a>
        </div>

        <div className='contenedor-imagen'>
            <img src={
              urlRegex.test(imagen) ? (
                imagen
              ) : (
                "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
              )
            } alt="" />
            <p className='fecha'>
              {
                fecha == null ? "No hay fecha" :
                fecha.length > 9
                ? fecha.slice(0, 10) + "..."
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