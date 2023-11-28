import React from 'react';
import Aos from 'aos';
import './style.css';
import { Link } from 'react-router-dom';
import mochilaVerde from '../../assets/mochilaVerde.png';
import mochilaCartoon from '../../assets/mochilaCartoon.png'
import camisaVerde from '../../assets/camisaVerde.png';
import depoiments from '../../data/depoiments';

import { Swiper, SwiperSlide } from 'swiper/react';

function Home() {

  Aos.init();

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
        <div className="media" data-aos="fade-right" data-aos-duration="900" data-aos-anchor-placement="top-center">
          <img src={camisaVerde} alt="" />
        </div>
        <div className="content" data-aos="fade-left" data-aos-duration="900" data-aos-anchor-placement="top-center">
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
      <div className='container-dp'>
        <div className='content-dp'>
          <Swiper
            className='swiper'
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {depoiments.map((depoiment, index) => (
              <SwiperSlide key={index} className='swiper-slide'>
                <h2>{depoiment.name}</h2>
                <h3>{depoiment.role}</h3>
                <p>{depoiment.text}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='content-dp'>
          <div className="media" data-aos="fade-left" data-aos-duration="900" data-aos-anchor-placement="top-center">
            <img src={mochilaCartoon} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;