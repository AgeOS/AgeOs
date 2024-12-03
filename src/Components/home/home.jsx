// import "../../stylesheets/home/index.scss";
// import "../../stylesheets/home/medias.scss";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Carousel from "./Cards/Cards";
import Avaliacoes from "./Avaliacoes/Avaliacoes";
import Footer from "../Footer/Footer";

//imgs
import celularApps from "../../assets/home/celular-apps.png";
import apps1 from "../../assets/home/apps1.png";
import apps2 from "../../assets/home/apps2.png";
import apps3 from "../../assets/home/apps3.png";
import apps4 from "../../assets/home/apps4.png";
import geminiPhone from "../../assets/home/celular-gemini.png";
import idosos from "../../assets/home/veios.png";
import logoProa from "../../assets/home/logo-proa.png";
import logoSenac from "../../assets/home/logo-senac.png";

import celularDeLado from "../../assets/home/celular-de-lado.png";
import seguranca from "../../assets/home/seguranca-garantida.png";
// import icones from "../../assets/home/icones.png";
// import appsIntuitivos from "../../assets/home/apps-intuitivos.png";
import atendimento from "../../assets/home/atendimento.png";
// import logo from "../../assets/Adquira/logo.png";
import navbar from "../../assets/footer/navbar-roxa.png";
import youtubeIcon from "../../assets/footer/youbute-branco.png";
import instaIcon from "../../assets/footer/insta-branco.png";
import faceIcon from "../../assets/footer/face-branco.png";
import linkeIcon from "../../assets/footer/linke-branco.png";
// import Chatbot from "../chatbot

import "../../stylesheets/efeitos/efeitos.scss";
import { useIntersectionObserver } from "../Hooks/Efeitos";

export default function Home() {
  useIntersectionObserver();

  return (
    <>
      <NavBar />
      <div className="home-page-container">
        {/* <Chatbot/> */}
        <div className="hero-section">
          <div className="apresentation slide-in-left">
            <h1>AgeOS, O Sistema Operacional Perfeito para quem você ama</h1>
            <Link to="/sobrenos">
              <button className="btn-conhecer">Conheça-nos</button>
            </Link>
          </div>

          <div className="phone-img slide-in-right">
            <img src={celularDeLado} alt="" />
          </div>
        </div>

        <div className="telas">
          <h1>Interface Simples</h1>
          <p>
            Um Sistema intuitivo, que oferece praticidade e a segurança
            necessária para seu familiar navegar na internet com tranquilidade
          </p>

          <div className="slide">
            <Carousel />
          </div>
        </div>

        <div className="beneficios-etc">
          <h1>Benefícios</h1>
          <p>
            Descubra as funcionalidades que tornam o AgeOS a escolha perfeita
            para os seus entes queridos
          </p>

          <div className="seguranca">
            <img src={seguranca} alt="" />

            <div className="seguranca-text">
              <h1>Segurança Garantida</h1>
              <p>
                Mecanismo de segurança, ajudando a evitar fraudes telefônicas e
                digitais
              </p>
            </div>
          </div>

          <div className="apps">
            <h2>Apps por Categoria</h2>
            <div className="celular-apps slide-in-left">
              <img src={celularApps} alt="" />
            </div>

            <div className="lista-apps slide-in-right">
              <h2>Apps por Categoria</h2>
              <p>
                Aplicativos organizados por tipos, pensado para facilitar a
                busca de forma rápida e simples.
              </p>

              <div className="apps-lado1">
                <div className="bloco1">
                  <img src={apps1} alt="" />
                  <p>Social</p>
                </div>
                <div className="linha-lateral"></div>
                <div className="bloco2">
                  <img src={apps2} alt="" />
                  <p>Web</p>
                </div>
                {/* <div className="linha-baixo"></div> */}
              </div>

              <div className="apps-lado2">
                <div className="bloco3">
                  <img src={apps3} alt="" />
                  <p>Entretenimento</p>
                </div>
                <div className="linha-lateral2"></div>

                <div className="bloco4">
                  <img src={apps4} alt="" />
                  <p>Música</p>
                </div>
              </div>
            </div>
          </div>

          <div className="gemini">
            <div className="text-gemini slide-in-left">
              <h2>Inteligência Artificial</h2>
              <p>
                Conheça a IA Gemini, uma assistente para ajudar seus entes
                queridos. Desde buscar músicas e receitas até encontrar as
                últimas notícias. Gemini facilita o acesso à informação e torna
                o cotidiano mais prático e conectado.
              </p>
            </div>

            <div className="gemini-phone slide-in-right">
              <img src={geminiPhone} alt="" />
            </div>
          </div>

          <div className="atendimento">
            <img src={atendimento} alt="" />

            <h1>Atendimento</h1>
            <p>
              Suporte rápido e humanizado, adaptado às necessidades dos nossos
              clientes
            </p>
          </div>
        </div>

        <div className="conheca-mais">
          <div className="left-side-conheca">
            <h2>Conheça mais sobre o sistema</h2>
            <p>
              Explore as funções do sistema que transformarão o dia a dia da sua
              família.
            </p>
            <button className="btn-conheca-mais">
              <Link
                to="/adquira/"
                onClick={() => {
                  setTimeout(() => {
                    const element = document.querySelector(
                      ".simplicidade-section"
                    );
                    element?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
              >
                Conheça mais
              </Link>
            </button>
          </div>

          <div className="right-side-conheca">
            <img src={idosos} alt="" />
          </div>
        </div>

        <div className="agradecimentos">
          <h2>Parceiros</h2>
          <div className="agradecimentos-imgs">
            <img src={logoSenac} alt="" className="senac" />
            <img src={logoProa} alt="" className="proa" />
          </div>
        </div>

        <Avaliacoes />

        <Footer
          foto={navbar}
          color="white"
          you={youtubeIcon}
          insta={instaIcon}
          face={faceIcon}
          linke={linkeIcon}
        />
      </div>
    </>
  );
}
