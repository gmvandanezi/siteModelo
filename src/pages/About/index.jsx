import Aos from "aos";
import "./style.css";
import { Link } from "react-router-dom";
import itensDeArmarinho from "../../assets/itensDeArmarinho.png";
import canecasEstampadas from "../../assets/canecasEstampadas.png";
import ButtonLink from "../../components/ButtonLink";
import grupoDeItensDeArmarinho from "../../assets/grupoDeItensDeArmarinho.png";


function About() {

    Aos.init();

    return (
        <>
            <div className="container">
                <div className="media" data-aos="fade-up" data-aos-duration="900">
                    <img src={itensDeArmarinho} alt="img" />
                </div>
                <div className="content" data-aos="fade-up" data-aos-duration="900">
                    <h1 className="gradient">Contrary to popular belief, Lorem Ipsum is not simply random text.</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                        piece of classical
                        Latin literature from 45 BC, making it over 2000 years old.</p>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                        piece of classical
                        Latin literature from 45 BC, making it over 2000 years old.</p>
                    <Link className="btn-link" to="/contato"><span>Contato</span></Link>
                </div>
                <div className="img-fullW " data-aos="fade-up" data-aos-duration="900">
                    <img src={canecasEstampadas} alt="canecas animadas" />
                </div>
                <div className="content" data-aos="fade-up" data-aos-duration="900">
                    <div className="card-body">
                        <strong>Contrary to popular belief:</strong>
                        <p>Lorem Ipsum is not simply random text. It has roots in a
                            piece of classical
                            Latin literature from 45 BC, making it over 2000 years old.</p>
                    </div>
                    <div className="card-body">
                        <strong>Contrary to popular belief:</strong>
                        <p>Lorem Ipsum is not simply random text. It has roots in a
                            piece of classical
                            Latin literature from 45 BC, making it over 2000 years old.</p>
                    </div>
                    <div className="card-body"> 
                        <strong>Contrary to popular belief:</strong>
                        <p>Lorem Ipsum is not simply random text. It has roots in a
                            piece of classical
                            Latin literature from 45 BC, making it over 2000 years old.</p>
                    </div>
                </div>
                <div className="media" data-aos="fade-up" data-aos-duration="900">
                    <img src={itensDeArmarinho} alt="img" />
                </div>
            </div>
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
                    <ButtonLink value="portfolio" />
                </div>
                <div className="media" data-aos="fade-left" data-aos-duration="900">
                    <img src={grupoDeItensDeArmarinho} alt="" />
                </div>
            </div>
        </>
    )
}

export default About;