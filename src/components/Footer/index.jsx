import './style.css';

function Footer() {

  const whatsappLink = "https://wa.me/5532984120294";
  const instagramLink = "https://www.instagram.com/pontocertojf";

  return (
    <div className='footer'>
      <div className='address'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.3804834044777!2d-43.35084412391953!3d-21.765530598084585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989b5e2df2d6d9%3A0x58acac4465c68279!2sAv.%20Bar%C3%A3o%20do%20Rio%20Branco%2C%202721%20-%20113%20-%20Centro%2C%20Juiz%20de%20Fora%20-%20MG%2C%2041615-001!5e0!3m2!1spt-BR!2sbr!4v1699965220540!5m2!1spt-BR!2sbr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='social-icons'>
        <a href={instagramLink} target='blank'><i className="fa fa-instagram" aria-hidden="true"></i></a>
        <a href={whatsappLink} target='blank'><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
      </div>
    </div>
  )
}

export default Footer;