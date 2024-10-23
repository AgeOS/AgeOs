// import { Link } from "react-router-dom";
import "../../stylesheets/navbar/index.scss";
import "../../stylesheets/navbar/media.scss";

export default function NavBar() {
  return (
    <>
        <button
          className="button-navbar"
          onClick={() => {
            //função que que abre o menu lateral e muda o icone da navbar
            const modal = document.querySelector(".modal-lateral");
            const img = document.querySelector(".button-navbar img");

            if (modal.style.display === "none" || modal.style.display === "") {
              modal.style.display = "flex";
              img.src = "src/assets/navbar/menu-fechado.png"; // Novo src da imagem
            } else {
              modal.style.display = "none";
              img.src = "src/assets/navbar/menu-roxo.png"; // src original da imagem
            }
          }}
        >
          <img src="src\assets\navbar\menu-roxo.png" alt="" />
        </button>

        <div className="modal-lateral">
          <div className="conteudo">
            <img src="src\assets\navbar\logo-1.png" alt="" />

            <ul>
              <li>
                <Link >Home</Link>
              </li>
              <li>
                <Link to="Sobrenos">Sobre nós</Link>
              </li>
              <li>
                <Link to="Adquira">Adquira</Link>
              </li>
              <li>
                <Link to="Suporte">Suporte</Link>
              </li>
            </ul>

            <div className="buttons">
              <button className="theme">
                <img src="src\assets\navbar\image-34.png" alt="" />
              </button>

              <button className="login">
                <Link to="Login">Login</Link>
              </button>

              <button className="cadastro">
                <Link to="Cadastro">Cadastre-se</Link>
              </button>
            </div>
          </div>
        </div>

        <nav className="nav-bar">
          <div className="logo">
            <img src="src\assets\navbar\logo-1.png" alt="" />
          </div>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Sobre nós</Link>
            </li>
            <li>
              <Link to="/contact">Adquira</Link>
            </li>
            <li>
              <Link to="/contact">Suporte</Link>
            </li>
          </ul>

          <div className="buttons">
            <button className="theme">
              <img src="src\assets\navbar\image-34.png" alt="" />
            </button>

            <button className="login">
              <Link>Login</Link>
            </button>

            <button className="cadastro">
              <Link>Cadastre-se</Link>
            </button>
          </div>
        </nav>
    </>
  );
}
