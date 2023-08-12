import { useState, useEffect } from "react"

import NewsCard from "../components/NewsCard"
import Header from "../components/Header"

import { fetchApiNoticias } from '../helpers/fetchApiNoticias'

import useInterOb from "../hook/useInterOb"

import './Noticias.css'


function App() {
  const [noticias, setNoticias] = useState(null)
  const [tematica, setTematica] = useState("JavaScript")
  const [cantidad, setCantidad] = useState(5)

  const [ setElements, isIntersecting] = useInterOb({
    threshold: 0.25,
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
      <Header />
      <input type="text" onChange={
        (event) => {
          event.preventDefault()
          if (event.target.value.length > 3){
            setTematica(event.target.value)
          }  
        }
      } />

      
      <div className="contenedor">
      {
        noticias ? noticias.map((noticia) => {
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
        }) : <p>Cargando...</p>
      }
      </div>


      <div className="isStart"  id="final"></div>

    </>
  )
}

export default App
