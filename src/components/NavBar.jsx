import { Carrito } from "./Carrito"
import { ItemListContainer } from "./ItemListContainer"

export const NavBar = () => {
  return (
    <header className="header">
      <h1>TecnoTienda</h1>
      <nav className="nav">
        <ul className="nav-menu">
          <li><a className="nav-link" href="#">Inicio</a></li>
          <li><a className="nav-link" href="#">Celulares</a></li>
          <li><a className="nav-link" href="#">Notebooks</a></li>
          <li><a className="nav-link" href="#">Accesorios</a></li>
        </ul>
      </nav>
      <Carrito />
    </header>
  )
}