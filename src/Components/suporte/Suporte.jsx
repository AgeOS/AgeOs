import React, { useEffect } from 'react';
import '../../stylesheets/suporte/suporte.scss';
import whats from '../../assets/suporte/whats.png';
import email from '../../assets/suporte/email.png';
import svgPessoas from '../../assets/suporte/imgs.png';
import chatbot from '../../assets/suporte/Chatbot.png';

function Suporte() {

  useEffect(() => {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }, []);

  return (
    <section className="container_suporte">
      <div className="container_imagens">
        <img src={svgPessoas} alt="" />
      </div>

      <section className="container_canal">
        <div className="titulo">
          <h1>Canais de contato</h1>
        </div>
        <div className="atencao">

          <div className="container">
            <img src={whats} alt="" />
            <p>Assistência por meio do nosso canal no WhatsApp, para ajudar você com dúvidas, orientações ou qualquer suporte técnico.</p>
            <button><p>Clique Aqui</p></button>
          </div>

          <div className="container">
            <img src={email} alt="" />
            <p>Atendimento por e-mail para ajudar você com dúvidas, orientações ou qualquer suporte técnico que precisar.</p>
            <button><p>Clique Aqui</p></button>
          </div>

        </div>
      </section>

      <section className="container_solucoes">
        <div className="titulo2">
          <h2>Buscar Soluções</h2>
        </div>

        <div className="search">
          <input type="text" placeholder="Buscar soluções..." />
        </div>

        <div className="chatbot">
          <div className="dentro_chatbot">
            <h1>Tire suas dúvidas <br />
              com nosso ChatBot <span className='Bold'>AgeBot</span></h1>
          </div>

          <div className='dentro_chatbot2'>
            <img src={chatbot} alt="AgeBot" />
            <button><a href="#">Iniciar chat</a></button>
          </div>
        </div>
      </section>

      <section className="container_duvidas">
        <h1>Dúvidas Frequentes</h1>
        <section className="section-c">
          <div className="containerr">

            <button className="accordion">º Preciso comprar um novo celular para usar o AgeOS?</button>
            <div className="panel">
              <p>Não! O AgeOS pode ser instalado em qualquer dispositivo Android, oferecendo uma solução acessível e eficiente sem a necessidade de trocar de aparalho.</p>
            </div>

            <button className="accordion">º Como o sistema protege contra fraudes?</button>
            <div className="panel">
              <p>O AgeOS possui um identificador de chamadas que alerta sobre números suspeitos e evita fraudes telefônicas, além de proteção nativa que dispensa antivírus externo.</p>
            </div>

            <button className="accordion">º O AgeOS recebe atualizações?</button>
            <div className="panel">
              <p>Sim! As atualizações são recorrentes, garantindo que o sistema esteja sempre protegido e funcionando com os recursos mais recentes.</p>
            </div>

            <button className="accordion">O que acontece se houver algum problema técnico?</button>
            <div className="panel">
              <p>Oferecemos suporte dedicado para resolver qualquer dúvida ou problema técnico, com atendimento de longa duração conforme seu plano. Além disso, contamos com um fórum onde usuários podem compartilhar dúvidas e apoiar outras famílias.</p>
            </div>

          </div>
        </section>

      </section>

    </section>
  );
}

export default Suporte;
