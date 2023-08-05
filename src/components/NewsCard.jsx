import PropTypes from 'prop-types';

export default function NewsCard({titulo, autor, imagen, url, descripcion, fecha}) {

  return (
    <>
        <a href={url}>
            <h2>{titulo}</h2>
        </a>
        <p>{autor}</p>
        <img src={
            imagen || "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
        } alt={titulo} />
        <p>{descripcion}</p>
        <p>{fecha}</p>
    </>
  )
}

NewsCard.propTypes = {
    titulo: PropTypes.string.isRequired,
    autor: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
}