// import "../../stylesheets/home/index.scss";
// import "../../stylesheets/home/medias.scss";
import NavBar from "../NavBar/NavBar";
import Carousel from "./Cards/Cards";
import Avaliacoes from './Avaliacoes/Avaliacoes'
import Footer from "../Footer/Footer";


//imgs
import celularDeLado from '../../assets/home/celular-de-lado.png'
import seguranca from '../../assets/home/seguranca-garantida.png'
import icones from '../../assets/home/icones.png'
import appsIntuitivos from '../../assets/home/apps-intuitivos.png'
import atendimento from '../../assets/home/atendimento.png'
import logo from '../../assets/home/image-32.png'
import navbar from '../../assets/footer/navbar-roxa.png'
import youtubeIcon from '../../assets/footer/youbute-branco.png'
import instaIcon from '../../assets/footer/insta-branco.png'
import faceIcon from '../../assets/footer/face-branco.png'
import linkeIcon from '../../assets/footer/linke-branco.png'



export default function Home() {
  return (
    <>
    <NavBar/>
    <div className="home-page-container">
      <div className="hero-section">
        <div className="apresentation">
          <h1>AgeOS, O Sistema Operacional perfeito para quem você ama</h1>
          <button className="btn-conhecer">Conheça-nos</button>
        </div>

        <div className="phone-img">
          <img src={celularDeLado} alt="" />
        </div>
      </div>

      <div className="telas">
        <h1>Interface Simples</h1>
        <p>
          Um Sistema intuitivo, que oferece praticidade e a segurança necessária
          para seu familiar navegar na internet com tranquilidade
        </p>

        <div className="slide">
          <Carousel />
        </div>
      </div>

      <div className="beneficios-etc">
        <h1>Benefícios</h1>
        <p>
          Descubra as funcionalidades que tornam o AgeOS a escolha perfeita para
          os seus entes queridos
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
          <h1>Apps intuitivos</h1>

          <p>
            Experiências descomplicada, especialmente para quem não tem
            familiaridade com a tecnologia
          </p>

          <div className="icons">
            <img src={icones} alt="" />
          </div>

          <img src={appsIntuitivos} alt="" />
        </div>

        <div className="atendimento">
          <img src={atendimento} alt="" />

          <h1>Atendimento</h1>
          <p>
            Suporte rápido e humanizado,adaptando às necessidades dos nossos
            clientes
          </p>
        </div>
      </div>

      <div className="pacotes">
        <h1>Adquira seu AgeOS</h1>
        <p>Os planos ideais que cabem no seu bolso</p>

        <div className="cards">
          <div className="pacote-basico">
            <h2>Pacote básico</h2>

            <img src={logo} alt="" />
            <p>AgeOS</p>

            <ul>
              <li>Sistema apenas para um aparelho</li>
              <li>Valor fixo por sistema</li>
              <li>Somente atualições estáveis</li>
              <li>Segurança para phishing e golpes</li>
              <li>Identificador de chamadas suspeitas</li>
              <li>Segurança reforçada em apps financeiros</li>
            </ul>

            <button>R$69,99</button>
          </div>

           {/* <div className="recomendado">
              <p>Recomendado</p>
              </div>  */}
          <div className="pacote-premium">

            <h2>Pacote Premium</h2>

            <img src={logo} alt="" />
            <p>AgeOS</p>

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

            <button className="button-buy-primium">R$299,99</button>

          </div>
        </div>

        <button className="duvidas">Tire suas dúvidas</button>
      </div>

      <Avaliacoes/>

    <Footer
      foto={navbar}
      color='white'
      you={youtubeIcon}
      insta={instaIcon}
      face={faceIcon}      
      linke={linkeIcon}
      />
    </div>


    </>
  );
}
