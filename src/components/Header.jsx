import { NavLink } from "react-router-dom"
import "./Header.css"

export default function Header() {
  return (
    <header>
        <h1>
            <NavLink to='/'>Noticias Saturno</NavLink>
        </h1>
        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/noticia'>Noticias</NavLink></li>
                <li><NavLink to='/favoritos'>Favoritos</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>

            </ul>
        </nav>
    </header>
  )
}
