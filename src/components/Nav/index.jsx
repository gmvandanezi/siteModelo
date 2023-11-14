import './style.css';
import { Link } from 'react-router-dom';
import img from '../../assets/logo.png';

function Nav() {

  function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
  }

  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to="/"><img src={img} alt="logo" /></Link>
      </div>

      <div id="nav">
        <button id="btn-mobile" onClick={toggleMenu}><span></span></button>
        <ul className="menu">
          <li><Link className='menu-item' to='/'>Home</Link></li>
          <li><Link className='menu-item' to='/sobre'>Sobre</Link></li>
          <li><Link className='menu-item' to='/portfolio'>Portfolio</Link></li>
          <li><Link className='menu-item' to='/contato'>Contato</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;