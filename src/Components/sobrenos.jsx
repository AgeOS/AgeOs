import { BrowserRouter as Router, Link } from "react-router-dom";
import "../stylesheets/sobrenos/sobrenos.scss";

export default function sobrenos() {
  return (
    <>
      <div className="container">
        <img src="src/assets/imagens/inici.png" alt="Início" className="imagem" />
      </div>

      <div className="container2">
        <img src="src/assets/imagens/chatbot.png" alt="Chatbot" className="imagem2" />
      </div>

      <div className="container_missao">
        <div className="texto">
          <h1>Missão</h1>
          <p>
            Desenvolver sistemas operacionais acessíveis e seguros, que simplifiquem o uso da
            tecnologia para pessoas da terceira idade, oferecendo soluções que promovam
            segurança e autonomia no ambiente digital.
          </p>
        </div>
        <div className="imagem3">
          <img src="src/assets/imagens/alvo.png" alt="Alvo" />
        </div>
      </div>

      <div className="container_visao">
        <div className="imagem4">
          <img src="src/assets/imagens/olho.png" alt="Olho" />
        </div>
      </div>

      <div className="texto_visao">
        <h1>Visão</h1>
        <p>
          Ser referência em tecnologia acessível, permitindo que pessoas de todas as idades,
          especialmente os idosos, utilizem seus dispositivos com facilidade, segurança e conforto.
        </p>
      </div>

      <div className="valores-e-coracao">
        <div className="valores">
          <h1>Valores</h1>
          <p><span className="bold">Acessibilidade:</span> Tornar a tecnologia mais inclusiva e intuitiva para todos.</p>
          <p><span className="bold">Segurança:</span> Garantir proteção contra fraudes e ameaças digitais.</p>
          <p><span className="bold">Inovação:</span> Desenvolver soluções criativas que atendam às necessidades de quem tem mais dificuldade com a tecnologia.</p>
          <p><span className="bold">Confiança:</span> Oferecer produtos que tragam tranquilidade no uso diário, permitindo que nossos clientes se sintam seguros e protegidos online.</p>
          <p><span className="bold">Empatia:</span>Colocar o usuário no centro de todas as nossas criações, entendendo suas limitações e necessidades. </p>
          <p><span className="bold">Confiança:</span> Oferecer produtos que tragam tranquilidade no uso diário, permitindo que nossos clientes se sintam seguros e protegidos online. </p>
        </div>

        <div className="coracao">
          <img src="src/assets/imagens/coração.png" alt="Coração" />
        </div>
      </div>
      <div>
        
      <div className="identidade">
      <img src="src/assets/imagens/identi.png" alt="Olho" />
      </div>
      </div>
      <div>
         <h1>Equipe</h1>
      </div>
    </>
  );
}
