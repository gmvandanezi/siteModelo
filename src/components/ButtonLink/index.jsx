import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({ value }) => {
  useEffect(() => {
    // Quando o componente é montado, adicionamos o evento de clique ao botão
    const btnLink = document.querySelector(".btn-link");

    const handleClick = () => {
      smoothScroll(document.body, 0, 100);
      smoothScroll(document.documentElement, 0, 100);
    };

    btnLink.addEventListener('click', handleClick);

    // Limpamos o evento quando o componente é desmontado
    return () => {
      btnLink.removeEventListener('click', handleClick);
    };

    // Função para rolar suavemente
    function smoothScroll(element, to, duration) {
      const start = element.scrollTop,
        change = to - start,
        increment = 20;
      let currentTime = 0;

      const animateScroll = function () {
        currentTime += increment;
        const val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if (currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      };

      animateScroll();
    }

    // Função de easing para suavizar a rolagem
    Math.easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };
  }, []); // O array vazio assegura que este efeito é executado apenas uma vez, sem depender de props ou estado

  return (
    <Link className="btn-link" to={`/${value}`}>
      <span>{value}</span>
    </Link>
  );
};

export default ButtonLink;