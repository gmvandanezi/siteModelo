import Aos from 'aos';
import './style.css';
import { Link } from 'react-router-dom';
import img from '../../assets/backpack.png';

function Home() {

  Aos.init();

  return (
    <div className="container bg-banner">
      <div className="content" data-aos="fade-right" data-aos-duration="500">
        <h1 className="gradient">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
          in
          a
          piece of classical
          Latin literature from 45 BC, making it over 2000 years old.</h1>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
          piece of classical
          Latin literature from 45 BC, making it over 2000 years old.</p>
        <Link className="btn-link" to='/sobre'><span>Sobre</span></Link>
      </div>
      <div className="media" data-aos="fade-left" data-aos-duration="500">
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default Home;