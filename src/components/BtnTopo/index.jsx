import React, { useEffect } from 'react';
import './style.css';

const BtnTopo = () => {

    useEffect(() => {
        // Obtenha o botão
        var btnTopo = document.getElementById("btnTopo");

        // Quando o usuário rolar 20 pixels a partir do topo da página, mostre o botão
        window.onscroll = function () {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                btnTopo.style.display = "block";
            } else {
                btnTopo.style.display = "none";
            }
        };

        // Quando o usuário clicar no botão, faça a rolagem suave de volta ao topo
        btnTopo.onclick = function () {
            // Rode a smoothScroll function para rolar suavemente
            smoothScroll(document.body, 0, 100); // Para navegadores Safari
            smoothScroll(document.documentElement, 0, 100); // Para Chrome, Firefox, IE e Opera
        };

        // Função para rolar suavemente
        function smoothScroll(element, to, duration) {
            var start = element.scrollTop,
                change = to - start,
                currentTime = 0,
                increment = 20;

            var animateScroll = function () {
                currentTime += increment;
                var val = Math.easeInOutQuad(currentTime, start, change, duration);
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
        <button id="btnTopo"><i className="fa fa-arrow-up" aria-hidden="false"></i></button>
    )
}

export default BtnTopo;