import { useEffect, useState } from "react"
import NewsCard from "./components/NewsCard"
import { fetchApiNoticias } from './helpers/fetchApiNoticias'

function App() {
  const [noticias, setNoticias] = useState([])
  const [tematica, setTematica] = useState("JavaScript")
  const [cantidad, setCantidad] = useState(5)

  useEffect(() => {
    fetchApiNoticias(tematica, cantidad, 1)
      .then((noticias) => {
        setNoticias(noticias)
      })
  }, [tematica, cantidad])

  return (
    <>
      <h1>News Days</h1>
      <p>En esta pagina vas a conseguir cositas lindas</p>
      <input type="text" onChange={
        (event) => {
          event.preventDefault()
          if (event.target.value.length > 3){
            setTematica(event.target.value)
          }
          
        }
      } />
      {
        noticias.map((noticia) => {
          return (
            <NewsCard
              key={noticia.url}
              titulo={noticia.title}
              autor={noticia.author}
              imagen={noticia.urlToImage}
              url={noticia.url}
              descripcion={noticia.description}
              fecha={noticia.publishedAt}
            />
          )
        })
      }

      <div></div>

    </>
  )
}

export default App
