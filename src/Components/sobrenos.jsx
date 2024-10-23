// import { BrowserRouter as Router, Link } from "react-router-dom";
// import "../stylesheets/sobrenos/sobrenos.scss";
import NavBar from "./NavBar/NavBar";

export default function sobrenos() {
  return (
    <>
      <NavBar/>
      <div className="containersobre">
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
          <p><span className="bold">Empatia:</span> Colocar o usuário no centro de todas as nossas criações, entendendo suas limitações e necessidades.</p>
          <p><span className="bold">Confiança:</span> Oferecer produtos que tragam tranquilidade no uso diário, permitindo que nossos clientes se sintam seguros e protegidos online.</p>
        </div>

        <div className="coracao">
          <img src="src/assets/imagens/coração.png" alt="Coração" />
        </div>
      </div>

      <div className="identidade">
        <img src="src/assets/imagens/identi.png" alt="Olho" />
      </div>

      <div className="container_tequipe">
        <h1>Equipe</h1>
      </div>

      {/* Contêiner Flex para as duas metades */}
      <div className="container-isa-flex">
        {/* Primeira metade */}
        <div className="isa">
          <img src="src/assets/imagens/isainfo.png" alt="Coração" className="isap" />
          <div>
            <a href="https://github.com/Minsonawoon" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/imagens/redes.png" alt="Coração" className="git" />
            </a>
            <a href="https://www.linkedin.com/in/isabela-clemente-da-silva/" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/imagens/redes1.png" alt="Coração" className="linke" />
            </a>
          </div>
        </div>

        {/* Segunda metade (cópia) */}
        <div className="isa">
          <img src="src/assets/imagens/kaiqueinfo.png" alt="Coração" className="isap" />
          <div>
            <a href="https://github.com/jessemp3
" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/imagens/redes.png" alt="Coração" className="git" />
            </a>
            <a href="https://www.linkedin.com/in/kaique-alves-52a564287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/imagens/redes1.png" alt="Coração" className="linke" />
            </a>
          </div>
        </div>
      </div>

      {/* Contêiner Flex para as duas metades */}
      <div className="container-jesse-flex">
        {/* Primeira metade */}
        <div className="jesse">
          <img src="src/assets/imagens/marceloinfo.png" alt="Coração" className="jessep" />
          <div>
            <a href="https://github.com/Marcelo-DEV427" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/imagens/redes.png" alt="Coração" className="git1" />
            </a>
            <a href="https://www.linkedin.com/in/marcelo-alves-tavares-174492242/" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/imagens/redes1.png" alt="Coração" className="linke1" />
            </a>
          </div>
        </div>

        {/* Segunda metade (cópia) */}
        <div className="jesse">
          <img src="src/assets/imagens/guiinfo.png" alt="Coração" className="jessep" />
          <div>
            <a href="https://github.com/GuillyPixel" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/imagens/redes.png" alt="Coração" className="git3" />
            </a>
            <a href="https://www.linkedin.com/in/guillherme-martins-fernandes-23a22432b" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/imagens/redes1.png" alt="Coração" className="linke3" />
            </a>
          </div>
        </div>
      </div>

      <div className="container-jeff-flex">
        {/* Primeira metade */}
        <div className="jeff">
          <img src="src/assets/imagens/jeffinfo.png" alt="Coração" className="jeffp" />
          <div>
            <a href="https://github.com/JeffersonJesusDev" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/imagens/redes.png" alt="Coração" className="git4" />
            </a>
            <a href="https://www.linkedin.com/in/jefferson-de-jesus-da-silva/" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/imagens/redes1.png" alt="Coração" className="linke4" />
            </a>
          </div>
        </div>

        {/* Segunda metade (cópia) */}
        <div className="jesse">
          <img src="src/assets/imagens/yuriinfo.png" alt="Coração" className="jeffp" />
          <div>
            <a href="https://github.com/unasc1ment0" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/imagens/redes.png" alt="Coração" className="git4" />
            </a>
            <a href="https://www.linkedin.com/in/yuri-nascimento-da-silva-442a63324/" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/imagens/redes1.png" alt="Coração" className="linke4" />
            </a>
          </div>
        </div>
      </div>

      <div className="container-vitor-flex">
        {/* Primeira metade */}
        <div className="vitor">
          <img src="src/assets/imagens/vitorinfo.png" alt="Coração" className="vitorp" />
          <div>
            <a href="https://github.com/cordatto" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/imagens/redes.png" alt="Coração" className="git5" />
            </a>
            <a href="
https://www.linkedin.com/in/vitor-gabriel-cordeiro-9b9605201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/imagens/redes1.png" alt="Coração" className="linke5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
