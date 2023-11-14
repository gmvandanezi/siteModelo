import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';
import { Outlet } from 'react-router-dom';
import BtnTopo from './components/BtnTopo';

function App() {

  return (
    <>
      <header>
        <Nav />
      </header>

      <main className='main'>
        <Outlet />
        <BtnTopo />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App;
