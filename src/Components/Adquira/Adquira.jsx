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

// import '../../stylesheets/Adquira/Adquira.scss'

function Adquira() {
  return (
    <>
      <NavBar />
      <div className="adquira-container">
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
        </div>
        <button className="Comprar">Adquira o pacote</button>
        <svg
          className="svg2"
          width="1004"
          height="62"
          viewBox="0 0 1004 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-47 60C-47 60 79.2315 6.37667 397.056 2.50327C714.881 -1.37013 905.511 18.1169 1003 26.6637"
            stroke="#FFDB10"
          />
        </svg>
        <section className="cel">
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
          <h5 className="h3_1">Navegação na Internet</h5>
          <p className="textao4">Com nosso antivírus e proteção contra links e sites suspeitos, seu familiar estará protegido contra ameaças virtuais, oferecendo segurança para garantir que a navegação online seja segura e tranquila.</p>
          <img className="Veio2" src={veio2} alt="" />
          <img className="Veio3" src={veio3} alt="" />
          <img className="Celular3" src={AgeOS2} alt="" />
          <h5 className="textao5">Tecnologia de Geolocalização</h5>
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
            <button className="Preco">R$69,99</button>
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
            <button className="Preco2">R$229,99</button>
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
      />
    </>
  );
}

export default Adquira;
