import { useState, useEffect } from "react"

import NewsCard from "../components/NewsCard"
import Header from "../components/Header"

import { fetchApiNoticias } from '../helpers/fetchApiNoticias'

import useInterOb from "../hook/useInterOb"

import './Noticias.css'
import { useSelector } from "react-redux"


function App() {
  const [noticiasState, setNoticiasState] = useState(null)
  const [tematica, setTematica] = useState("JavaScript")
  const [cantidad, setCantidad] = useState(5)
  const { noticias } = useSelector(state => state.noticias)
  console.log(noticias)
 

  const [ setElements, isIntersecting] = useInterOb({
    threshold: 0.25,
    root: null,
  })

  useEffect(() => {
    setElements([document.querySelector("#final")])
  }, [setElements])

  useEffect(() => {
    fetchApiNoticias(tematica, cantidad, 1)
      .then((noticiasState) => {
        if (!(typeof(noticiasState) === "undefined") || !(noticiasState === null)) {
          setNoticiasState(noticiasState)
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
        noticiasState ? noticiasState.map((noticia) => {
          return (
            <NewsCard
              key={noticia.url}
              titulo={noticia.title}
              autor={noticia.author}
              imagen={noticia.urlToImage}
              url={noticia.url}
              descripcion={noticia.description}
              fecha={noticia.publishedAt}
              //isFavorite={}
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