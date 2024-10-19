import { BrowserRouter as Router, Link } from "react-router-dom";
import "../stylesheets/sobrenos/sobrenos.scss"
export default function sobrenos(){
return(
<>
<div className="container"> 
    <img src="src/assets/imagens/inici.png" alt=""  class="imagem"/>
 </div>
 <div className="container2">
 <img src="src/assets/imagens/chatbot.png" alt=""  class="imagem2"/>
 </div>
 <div className="container_missao">
    <div className="texto">
    <h1>Missão</h1>
    <p>Desenvolver sistemas operacionais acessíveis e seguros, que simplifiquem o uso da tecnologia para pessoas da terceira idade, oferecendo soluções que promovam segurança e autonomia no ambiente digital.</p>
    </div>
    <div className="imagem3">
    <img src="src/assets/imagens/alvo.png" alt="" />
    </div>
 </div>

 <div className="container_visao">
    <div className="imagem4">
    <img src="src/assets/imagens/olho.png" alt="" />
    </div>
    </div>
    <div className="texto_visao">
    <h1>Visão</h1>
    <p>Ser referência em tecnologia acessível, permitindo que pessoas de todas as idades, especialmente os idosos, utilizem seus dispositivos com facilidade, segurança e conforto.</p>
    </div>







</>
);
}