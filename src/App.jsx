import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';
import { Outlet } from 'react-router-dom';
import BtnTopo from './components/BtnTopo';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

register();

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
