import veia from "../../assets/Adquira/Veia.png";
import celular from "../../assets/Adquira/AgeOS1.jpg";
// import celular from '../../assets/Adquira/ageos1.png'
// import Approval from "../../assets/Adquira/Approval.png";
// import Paint from "../../assets/Adquira/Paint.png";
// import Security from "../../assets/Adquira/Security.png";
import NavBar from "../NavBar/NavBar";
// import Footer from "../Footer/Footer";
// import footer from "../../assets/footer/navbar-roxa.png";
// import youtubeIcon from "../../assets/footer/youbute-branco.png";
// import instaIcon from "../../assets/footer/insta-branco.png";
// import faceIcon from "../../assets/footer/face-branco.png";
// import linkeIcon from "../../assets/footer/linke-branco.png";
import logo from "../../assets/Adquira/logo.png";
import veio2 from "../../assets/Adquira/veio2.png";
import veio3 from "../../assets/Adquira/veio3.png";
import AgeOS2 from "../../assets/Adquira/AgeOS2.png";
import AgeOS3 from "../../assets/Adquira/AgeOS3.png";
import moca from "../../assets/Adquira/moca.png";
import veio4 from "../../assets/Adquira/veio4.png";
import bolaRoxa from "../../assets/Adquira/rectangle-98.png";

import { Link } from "react-router-dom";

// import '../../stylesheets/Adquira/Adquira.scss'

function Adquira() {
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
            <Link>
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
          <div className="intuitivo-text">
            <h3>Visual</h3>
            <h2>Simples e Intuitivo</h2>
            <p>
              Experimente uma interface simplificada o que é mais importantes de
              forma acessível à primeira vista. Além disso, há botões grandes e
              intuitivos, ideais para quem busca praticidade, sem comprometer a
              estética.
            </p>
          </div>
          <div className="intuitivo-phone">
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
            <h1>Navegação nan Internet</h1>
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
            <img className="veio" src={veio4} alt="" />
            <img className="img-phone" src={AgeOS3} alt="" />
            <img className="filha" src={moca} alt="" />
          </div>
        </div>

        <div className="pacotes">
          <div className="pacotes-text">
            <h2>Adquira seu AgeOS</h2>
            <p>Os planos ideais que cabem no seu bolso</p>
          </div>
          <div className="pacotes">
            <div className="pacote-basico"></div>

            <div className="pacote-premium"></div>
          </div>
          <Link>
            <button>Tire suas dúvidas</button>
          </Link>
        </div>
      </div>

      {/* <div className="adquira-container">
        <div className="adquira_topo">
          <p>O mais vantajoso para sua família! </p>
          <h1>
            Contrate o pacote <span> Premium!</span>
          </h1>
          <div>
            <img className="Veia" src={veia} alt="idosa" />
          </div>
          <div className="circulo">
            <svg
              width="530"
              height="578"
              viewBox="0 0 509 499"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.14879 422.067C5.39336 188.026 196.043 0 430.108 0H509V575L284.5 558L0.5 541L2.14879 422.067Z"
                fill="#9A78C9"
              />
            </svg>
          </div>
          <button className="Comprar">Adquira o pacote</button>
          <div className="svg-line-yellow">
            <svg
              className="svg2"
              width=""
              height="62"
              viewBox="10 0 1000 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-47 60C-47 60 79.2315 6.37667 397.056 2.50327C714.881 -1.37013 905.511 18.1169 1003 26.6637"
                stroke="#FFDB10"
              />
            </svg>
          </div>
        </div>

        <section className="cel">
          <div className="phone-visual">
            <p className="visual">
              Visual <span className="amarelo">________</span>
            </p>
            <p className="textao3">
              Experimente uma interface simplificada, que destaca as informações
              mais importantes logo à primeira vista. A interface foi projetada
              para oferecer clareza, combinando uma estética moderna com
              usabilidade. Os botões são grandes e intuitivos, perfeitos para
              usuários que buscam praticidade. Navegue facilmente por recursos e
              funções, sem comprometer a beleza e o design.
            </p>
            <h5 className="frase2">Simples e intuitivo</h5>
            <img className="ageos1" src={celular} alt="" />
            <svg
              className="linha2"
              width="2075"
              height="70.6"
              viewBox="0 0 1945 69.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-47 2.00001C-47 2.00001 133.331 63.0196 587.366 67.4273C1041.4 71.835 1316.23 11.7257 1455.5 2"
                stroke="#7C76DA"
                strokeWidth="3"
              />
            </svg>
            <svg
              className="linha1"
              width="2047"
              height="108"
              viewBox="0 0 1980 108"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-32 106C-32 106 151.336 9.84783 612.939 2.90242C1074.54 -4.04299 1351.41 30.8992 1493 46.2245"
                stroke="#FFDB10"
                strokeWidth="3"
              />
            </svg>
          </div>

          <h5 className="h3_1">Navegação na Internet</h5>
          <p className="textao4">
            Com nosso antivírus e proteção contra links e sites suspeitos, seu
            familiar estará protegido contra ameaças virtuais, oferecendo
            segurança para garantir que a navegação online seja segura e
            tranquila.
          </p>
          <img className="Veio2" src={veio2} alt="" />
          <img className="Veio3" src={veio3} alt="" />
          <img className="Celular3" src={AgeOS2} alt="" />
          <h5 className="textao5">Tecnologia de Geolocalização</h5>
          <p className="textao6">
            Saiba de forma simples quando seu familiar precisar de você. Com o
            botão SOS, a localização e um alerta são compartilhados
            instantaneamente, facilitando o cuidado com quem você ama.
          </p>
          <img className="Veio4" src={veio4} alt="" />
          <img className="moca" src={moca} alt="" />
          <img className="Celular4" src={AgeOS3} alt="" />
          <h5 className="textao7">Adquira seu AgeOS</h5>
          <p className="textao8">Os planos ideias que cabem no seu bolso.</p>
        </section>

        <section className="grupo"></section>
        <section className="plano">
          <div className="compras">
            <h2 className="h2_1">Pacote Básico</h2>
            <img className="logo" src={logo} alt="Logo" />
            <ul className="textoss">
              <li className="textinho">Sistema apenas para um aparelho</li>
              <li className="textinho">Valor fixo por sistema</li>
              <li className="textinho">Somente atualizações estáveis</li>
              <li className="textinho">Segurança para phishing e golpes</li>
              <li className="textinho">Identificador de chamadas suspeitas</li>
              <li className="textinho">
                Segurança reforçada em apps financeiros
              </li>
            </ul>
            <button className="Preco">
              <a href="https://buy.stripe.com/eVa4gmgmR2J83bGaEE">R$69,99</a>
            </button>
          </div>
          <div className="divisao">recomendado</div>
          <div className="compras2">
            <h2 className="h2_2">Pacote Premium</h2>
            <img className="logo2" src={logo} alt="Logo" />
            <ul className="textoss">
              <li className="textinho">Sistema para cinco aparelhos</li>
              <li className="textinho">Valor promocional</li>
              <li className="textinho">Acesso antecipado a atualizações</li>
              <li className="textinho">Segurança para phishing e golpes</li>
              <li className="textinho">Identificador de chamadas suspeitas</li>
              <li className="textinho">
                Segurança reforçada em apps financeiros
              </li>
              <li className="textinho">Pacote personalizado</li>
              <li className="textinho">Suporte para backup</li>
            </ul>
            <button className="Preco2">
              <a href="https://buy.stripe.com/00g5kq0nT83sdQk145">R$229,99</a>
            </button>
          </div>
        </section>
      </div>
      <Footer
        foto={footer}
        color="white"
        you={youtubeIcon}
        insta={instaIcon}
        face={faceIcon}
        linke={linkeIcon}
      /> */}
    </>
  );
}

export default Adquira;
