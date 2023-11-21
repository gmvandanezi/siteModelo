import Aos from 'aos';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/logo.png';

function Contact() {

  Aos.init();

  return (
    <>
      <div className='container'>
        <div className="media" data-aos="fade-right" data-aos-duration="900">
          <img src={logo} alt="" />
          <h1 className="gradient">Endereço</h1>
          <p>Av. Lorem Ipsum, 23212131 LOJA 213112 - Centro - JJDSA DSDSAFSA / JJ</p>
          <p>Whatsapp: (45) 43566-898765</p>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical
            Latin literature from 45 BC, making it over 2000 years old.</p>
        </div>
        <div className="content" data-aos="fade-left" data-aos-duration="900">
          <h1 className="gradient">Endereço</h1>
          <p>Av. Lorem Ipsum, 23212131 LOJA 213112 - Centro - JJDSA DSDSAFSA / JJ</p>
          <p>Whatsapp: (45) 43566-898765</p>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical
            Latin literature from 45 BC, making it over 2000 years old.</p>
        </div>
      </div>
    </>
  )
}

export default Contact;