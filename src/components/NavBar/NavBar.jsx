import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="/">Mi Tienda</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to={'/products'} className='nav-link'>Todos los Productos</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu">
            <li><Link to={'/products'} className='dropdown-item'>Todos</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link to={'/products/Graficas'} className='dropdown-item'>Gráficas</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link to={"/products/Procesadores"} className='dropdown-item'>Procesadores</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link to={"/products/Perifericos"} className='dropdown-item'>Periféricos</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link to={"/products/Varios"} className='dropdown-item'>Varios</Link></li>
          </ul>
        </li>
      </ul>
      <CartWidget/>
    </div>
  </div>
</nav>
    )
}

export default NavBar