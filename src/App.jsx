import { Routes, Route, Navigate, NavLink } from 'react-router-dom'
import HomePages from './pages/HomePages'
import About from './pages/About'
import Noticias from './pages/Noticias'
import Header from './components/Header'


export default function App() {
  return (
    <>
        <Header></Header>

        <Routes>
            <Route path='/' element={ <HomePages/>}></Route>
            <Route path='/about' element={ <About/>}></Route>
            <Route path='/noticia' element={ <Noticias/>}></Route>
            <Route path='*' element={ <Navigate to="/about"/>}></Route>
        </Routes>
    </>
  )
}
