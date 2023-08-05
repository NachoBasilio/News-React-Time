import { useEffect, useState } from "react"
import NewsCard from "./components/NewsCard"
import { fetchApiNoticias } from './helpers/fetchApiNoticias'
import useInterOb from "./hook/useInterOb"
import './App.css'

function App() {
  const [noticias, setNoticias] = useState([])
  const [tematica, setTematica] = useState("JavaScript")
  const [cantidad, setCantidad] = useState(0)

  const [observer, setElements, entries, isIntersecting] = useInterOb({
    threshold: 0.75,
    root: null,
  })

  useEffect(() => {
    setElements([document.querySelector("#final")])
  }, [setElements])

  useEffect(() => {
    fetchApiNoticias(tematica, cantidad, 1)
      .then((noticias) => {
        if (!(typeof(noticias) === "undefined") || !(noticias === null)) {
          setNoticias(noticias)
        }
       
      })
      document.querySelector("#final").classList.remove("isStart")

    
      
  }, [tematica, cantidad])

  useEffect(() => {
    setCantidad(cantidad + 1)
  }, [isIntersecting])

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
        noticias && noticias.map((noticia) => {
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

      <div className="isStart"  id="final"></div>

    </>
  )
}

export default App
