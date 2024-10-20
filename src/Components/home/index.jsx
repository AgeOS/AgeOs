import "../../stylesheets/home/index.scss";
import '../../stylesheets/home/medias.scss'
import NavBar from "../NavBar/NavBar";
import Carousel from './Cards/Cards'
export default function Home() {

  return (
    <>
      <NavBar />

      <div className="hero-section">
        <div className="apresentation">
          <h1>AgeOS, O Sistema Operacional perfeito para quem você ama</h1>
          <button className="btn-conhecer">Conheça-nos</button>
        </div>

        <div className="phone-img">
          <img src="src\assets\home\celular-de-lado.png" alt="" />
        </div>
      </div>


        <div className="telas">
          <h1>Interface Simples</h1>
          <p>Um Sistema e intuito, que oferece praticidade e a segurança necessária para seu familiar navegar na internet com tranquilidade</p>

        <div className="slide">    
        <Carousel/>
        </div>

        </div>

        <div className="beneficios-etc">
          <h1>Benefícios</h1>
          <p>Descubra as funcionalidades que tornam o AgeOS a escolha perfeita para os seus entes queridos</p>

        <div className="seguranca">
          <img src="src\assets\home\seguranca-garantida.png" alt="" />

          <div className="seguranca-text">
         <h1>Segurança Garantida</h1>
          <p>Mecanismo de segurança, ajudando a evitar fraudes telefônicas e digitais</p>
          </div>
        </div>

        <div className="apps">
            <img src="src\assets\home\apps-intuitivos.png" alt="" />

            
        </div>

        </div>

      
    </>

  );
  
}
