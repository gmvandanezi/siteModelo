import Aos from 'aos';
import './style.css';
import { Link } from 'react-router-dom';
import img from '../../assets/site1.png';
import img2 from '../../assets/site2.png';

function About() {

  Aos.init();

  return (
    <div class="container" data-aos="fade-up" data-aos-duration="500" data-aos-anchor-placement="top-center">
            <div class="media">
                <img src={img} alt="img"/>
            </div>
            <div class="content">
                <h1 class="gradient">Contrary to popular belief, Lorem Ipsum is not simply random text.</h1>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                    piece of classical
                    Latin literature from 45 BC, making it over 2000 years old.</p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                    piece of classical
                    Latin literature from 45 BC, making it over 2000 years old.</p>
                    <Link className="btn-link" to='/contato'><span>Contato</span></Link>
            </div>
            <div class="img-fullW">
                <img src={img2} alt="canecas animadas"/>
            </div>
            <div class="content">
                <h1 class="gradient">Contrary to popular belief, Lorem Ipsum is not simply random text.</h1>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                    piece of classical
                    Latin literature from 45 BC, making it over 2000 years old.</p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                    piece of classical
                    Latin literature from 45 BC, making it over 2000 years old.</p>
                    <Link className="btn-link" to='/contato'><span>Contato</span></Link>
            </div>
            <div class="media">
                <img src={img} alt="img"/>
            </div>
        </div>
  )
}

export default About;