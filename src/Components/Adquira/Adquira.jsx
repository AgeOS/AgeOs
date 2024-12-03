import veia from "../../assets/Adquira/Veia.png";
import celular from "../../assets/Adquira/AgeOS1.jpg";
// import celular from '../../assets/Adquira/ageos1.png'
// import Approval from "../../assets/Adquira/Approval.png";
// import Paint from "../../assets/Adquira/Paint.png";
// import Security from "../../assets/Adquira/Security.png";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import footer from "../../assets/footer/navbar-roxa.png";
import youtubeIcon from "../../assets/footer/youbute-branco.png";
import instaIcon from "../../assets/footer/insta-branco.png";
import faceIcon from "../../assets/footer/face-branco.png";
import linkeIcon from "../../assets/footer/linke-branco.png";
import logo from "../../assets/Adquira/logo.png";
import veio2 from "../../assets/Adquira/veio2.png";
import veio3 from "../../assets/Adquira/veio3.png";
import AgeOS2 from "../../assets/Adquira/AgeOS2.png";
import AgeOS3 from "../../assets/Adquira/AgeOS3.png";
import moca from "../../assets/Adquira/moca.png";
import veio4 from "../../assets/Adquira/veio4.png";
import bolaRoxa from "../../assets/Adquira/rectangle-98.png";
import "../Hooks/Efeitos";

import { Link } from "react-router-dom";
import { useIntersectionObserver } from "../Hooks/Efeitos";

// import '../../stylesheets/Adquira/Adquira.scss'

export default function Adquira() {
  useIntersectionObserver();

  return (
    <>
      <NavBar />
      <div className="adquira-page">
        <div className="simplicidade-section">
          <div className="simplicidade-text">
            <h1>
              Simplicidade no <strong>dia a dia !</strong>
            </h1>
            <p>Veja o melhor serviço para a sua família</p>
            <Link
              to="#pacotes"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("pacotes")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              <button>Adquira o Pacote</button>
            </Link>
          </div>
          <div className="simplicidade-imgs">
            <img className="veia-img" src={veia} alt="" />
            <img className="bola-img" src={bolaRoxa} alt="" />
          </div>
          <div className="linha-amarela">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1004"
              height="62"
              viewBox="0 0 1004 62"
              fill="none"
            >
              <path
                d="M-47 60C-47 60 79.2315 6.37667 397.056 2.50327C714.881 -1.37013 905.511 18.1169 1003 26.6637"
                stroke="#FFDB10"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>

        <div className="simples-e-intuitivo">
          <div className="intuitivo-text slide-in-left">
            <h3>Visual</h3>
            <h2>Simples e Intuitivo</h2>
            <p>
              Experimente uma interface simplificada o que é mais importantes de
              forma acessível à primeira vista. Além disso, há botões grandes e
              intuitivos, ideais para quem busca praticidade, sem comprometer a
              estética.
            </p>
          </div>
          <div className="intuitivo-phone slide-in-right">
            <img src={celular} alt="" />
          </div>
          <div className="svg-lines">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1440"
              height="108"
              viewBox="50 0 1440 49"
              fill="none"
            >
              <path
                d="M-32 106C-32 106 151.336 9.84783 612.939 2.90242C1074.54 -4.04299 1351.41 30.8992 1493 46.2245"
                stroke="#FFDB10"
                strokeWidth="3"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1440"
              height="70"
              viewBox="-50 1 1440 67"
              fill="none"
            >
              <path
                d="M-47 2.00001C-47 2.00001 133.331 63.0196 587.366 67.4273C1041.4 71.835 1316.23 11.7257 1455.5 2"
                stroke="#7C76DA"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>

        <div className="navegacao-net">
          <div className="navegacao-text">
            <h1>Navegação na Internet</h1>
            <p>
              Com nosso antivírus e proteção contra links e sites suspeitos, seu
              familiar estará protegido contra ameaças virtuais, oferecendo
              segurança para garantir que a navegação online seja segura e
              tranquila.
            </p>
          </div>

          <div className="navegacao-imgs">
            <img className="img1" src={veio2} alt="" />
            <img className="img2" src={veio3} alt="" />
            <img className="img-phone" src={AgeOS2} alt="" />
          </div>
        </div>

        <div className="localizacao">
          <div className="localizacao-text">
            <h2>Tecnologia de Geolocalização</h2>
            <p>
              Saiba de forma simples quando seu familiar precisar de você. Com o
              botão SOS, a localização e um alerta são compartilhados
              instantaneamente, facilitando o cuidado com quem você ama.
            </p>
          </div>
          <div className="localizacao-imgs">
            <img className="veio slide-in-left" src={veio4} alt="" />
            <img className="img-phone" src={AgeOS3} alt="" />
            <img className="filha slide-in-right" src={moca} alt="" />
          </div>
        </div>

        <div className="pacotes" id="pacotes">
          <div className="pacotes-text">
            <h2>Adquira seu AgeOS</h2>
            <p>Os planos ideais que cabem no seu bolso</p>
          </div>
          <div className="pacotes">
            <div className="pacote-basico slide-in-left">
              <h2>Pacote Básico</h2>
              <img src={logo} alt="" />

              <ul>
                <li>Sistema apenas para um aparelho</li>
                <li>Valor fixo por sistema</li>
                <li>Somente atualizações estáveis</li>
                <li>Segurança para phishing e golpes</li>
                <li>Identificador de chamadas suspeitas</li>
                <li>Segurança reforçada em apps financeiros</li>
              </ul>

              <Link to="https://buy.stripe.com/eVa4gmgmR2J83bGaEE">
                <button>R$ 69,99</button>
              </Link>
            </div>
            <div className="recomendado slide-in-right">
              <h3>Recomendado</h3>
            </div>
            <div className="pacote-premium slide-in-right">
              <h2>Pacote Premium</h2>
              <img src={logo} alt="" />

              <ul>
                <li>Sistema para cinco aparelhos</li>
                <li>Valor promocional</li>
                <li>Acesso antecipado a atualizações</li>
                <li>Segurança para phishing e golpes</li>
                <li>Identificador de chamadas suspeitas</li>
                <li>Segurança reforçada em apps financeiros</li>
                <li>Pacote personalizado</li>
                <li>Suporte para backup</li>
              </ul>

              <Link
                className="button-premium"
                to="https://buy.stripe.com/00g5kq0nT83sdQk145"
              >
                <button>R$ 229,99</button>
              </Link>
            </div>
          </div>
          <div className="tire-as-duvidas">
            <Link
              to="/suporte"
              onClick={() => {
                setTimeout(() => {
                  const element = document.querySelector(".container_suporte");
                  element?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
            >
              <button>Tire suas dúvidas</button>
            </Link>
          </div>
        </div>
      </div>

      <Footer
        foto={footer}
        color="white"
        you={youtubeIcon}
        insta={instaIcon}
        face={faceIcon}
        linke={linkeIcon}
      />
    </>
  );
}
