import React from 'react';
import Slider from 'react-slick';
import Aos from 'aos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';
import { Link } from 'react-router-dom';
import mochilaVerde from '../../assets/mochilaVerde.png';
import camisaVerde from '../../assets/camisaVerde.png';
import depoiments from '../../data/depoiments';

function Home() {

  Aos.init();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="container bg-banner">
        <div className="content" data-aos="fade-right" data-aos-duration="900">
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
        <div className="media" data-aos="fade-left" data-aos-duration="900">
          <img src={mochilaVerde} alt="" />
        </div>
      </div>
      <div className='container'>
        <div className="media" data-aos="fade-right" data-aos-duration="900">
          <img src={camisaVerde} alt="" />
        </div>
        <div className="content" data-aos="fade-left" data-aos-duration="900">
          <h1 className="gradient">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
            in
            a
            piece of classical
            Latin literature from 45 BC, making it over 2000 years old.</h1>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical
            Latin literature from 45 BC, making it over 2000 years old.</p>
        </div>
      </div>
      <div className='container bg-dark-green'>
        <Slider {...sliderSettings}>
          {depoiments.map((depoiment, index) => (
            <div key={index} className='card-depoiment'>
              <h2>{depoiment.name}</h2>
              <h3>{depoiment.role}</h3>
              <p>{depoiment.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default Home;