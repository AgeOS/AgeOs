import "../../stylesheets/home/index.scss";
import '../../stylesheets/home/medias.scss'
import NavBar from "../NavBar/NavBar";

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

        <div>
          
        </div>


        </div>

        
    </>
  );
}
