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

        <div className="linha-amarela">
          <svg
            width=""
            height="108"
            viewBox="0 0 1016 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-20 106C-20 106 104.428 9.84783 417.713 2.90242C730.997 -4.04299 918.904 30.8992 1015 46.2245"
              stroke="#FFDB10"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
