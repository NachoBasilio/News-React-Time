import NewsCard from '../components/NewsCard';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 



describe('NewsCard', () => {
    const defaultProps = {
        titulo: 'Título de la noticia',
        autor: 'Autor de la noticia',
        imagen: 'https://example.com/imagen.jpg',
        url: 'https://example.com/noticia',
        descripcion: 'Descripción de la noticia',
        fecha: '2023-08-07',
      };
    test('Si renderiza correctamente', () => {
        
        const { getByText, getByAltText } = render(<NewsCard {...defaultProps} />);//renderiza el componente con las props por defecto

        expect(getByText(defaultProps.titulo)).toBeInTheDocument();//verifica que el titulo este en el documento

        expect(getByText(defaultProps.autor)).toBeInTheDocument();//verifica que el autor este en el documento
    
        expect(getByText(defaultProps.descripcion)).toBeInTheDocument();//verifica que la descripcion este en el documento

        expect(getByText('ver mas')).toHaveAttribute('href', defaultProps.url);//verifica que el link este en el documento

        expect(getByAltText('Título de la noticia')).toHaveAttribute('src', defaultProps.imagen);//verifica que la imagen este en el documento

        expect(getByText('2023-08-07')).toBeInTheDocument(); //verifica que la fecha este en el documento


    })

    test('renders correctly with long title', () => {

        const longTitle = 'Esta es una noticia con un título muy largo que debería ser recortado';
        const { getByText } = render(<NewsCard {...defaultProps} titulo={longTitle} />);
        


        const element = getByText((content, element) => {
          return element.textContent === 'Esta es una noticia con un tít...';
        });
      
        expect(element).toBeInTheDocument();
      });
      
      

})