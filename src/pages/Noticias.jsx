import { useState, useEffect } from "react"

import NewsCard from "../components/NewsCard"
import Header from "../components/Header"

import { fetchApiNoticias } from '../helpers/fetchApiNoticias'

import useInterOb from "../hook/useInterOb"

import './Noticias.css'
import { useDispatch, useSelector } from "react-redux"
import { addNoticiaFavorita } from "../store/noticias/noticiasSlice"
import { localStorageGet } from "../helpers/localStorageGet"


function App() {
  const [noticiasState, setNoticiasState] = useState(null)
  const [tematica, setTematica] = useState("JavaScript")
  const [cantidad, setCantidad] = useState(5)
  const dispatch = useDispatch();
  const noticiasStorage =  localStorageGet("noticiasFavoritas");

  useEffect(() => {

    if (noticiasStorage.length > 0) {
      noticiasStorage.forEach(noticia => {
        dispatch(addNoticiaFavorita(noticia));
      });
    }
  }, []);
 

  const [ setElements, isIntersecting] = useInterOb({
    threshold: 0.25,
    root: null,
  })

  useEffect(() => {
    setElements([document.querySelector("#final")])
  }, [setElements])

  useEffect(() => {
    fetchApiNoticias(tematica, cantidad, 1)
      .then((noticia) => {
        if (!(typeof(noticia) === "undefined") || !(noticia === null)) {
          setNoticiasState(noticia)
          console.log(noticia)
          console.log(noticiasState)
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
          if(!noticia.title) return null

          return (
            <NewsCard
              key={noticia.url}
              titulo={noticia.title}
              autor={noticia.author}
              imagen={noticia.urlToImage}
              url={noticia.url}
              descripcion={noticia.description}
              fecha={noticia.publishedAt}
              isFavorite={noticiasStorage ? noticiasStorage.some((noticiaStorage) => noticiaStorage.url === noticia.url) : false}
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