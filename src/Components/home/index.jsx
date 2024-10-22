import "../../stylesheets/home/index.scss";
import "../../stylesheets/home/medias.scss";
import NavBar from "../NavBar/NavBar";
import Carousel from "./Cards/Cards";
// import people from '../../assets/home/avaliacao.svg'
import Avaliacoes from './Avaliacoes/Avaliacoes'

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
        <p>
          Um Sistema e intuito, que oferece praticidade e a segurança necessária
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
          <img src="src\assets\home\seguranca-garantida.png" alt="" />

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
            <img src="src\assets\home\icones.png" alt="" />
          </div>

          <img src="src\assets\home\apps-intuitivos.png" alt="" />
        </div>

        <div className="atendimento">
          <img src="src\assets\home\atendimento.png" alt="" />

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

            <img src="src\assets\home\image-32.png" alt="" />
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

          <div className="pacote-premium">
           <div className="recomendado">
              <p>Recomendado</p>
            </div> 

            <h2>Pacote Premium</h2>

            <img src="src\assets\home\image-32.png" alt="" />
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

    {/* <div className="avaliacoes">
     <div className="avaliacao"> */}
        {/* <h1>O que as pessoas dizem sobre a AgeOS</h1>

        <div className="pessoas">
          <div className="cada-pessoa">

            <img src={people} alt="" />
            <p>Felipe</p>
          
          </div>
            <img className="aspas" src="src\assets\home\image-36.png" alt="" />
            <p>Estou muito satisfeito com o AgeOS. Instalei no celular da minha avó e a segurança do sistema a faz se sentir protegida contra golpes, o que me tranquiliza. O suporte ao cliente também é excelente, sempre pronto para ajudar. </p>
            <img className="aspas" src="src\assets\home\image-35.png" alt="" />
        </div> */}
     {/* </div>
    </div> */}

      

    </>
  );
}
