// import React from 'react';
import { Link } from "react-router-dom";
// import "../../stylesheets/navbar/index.scss";
// import "../../stylesheets/navbar/media.scss";
import '../../../public/stylesheets/navbar/index.css'
import '../../../public/stylesheets/navbar/media.css'

export default function NavBar() {
  return (
    <>
      <div className="navbar-container">

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
                {/* <Link to='/'>Home</Link> */}
              </li>
              <li>
                <Link >Sobre nós</Link>
              </li>
              <li>
                {/* <Link to='./'>Adquira</Link> */}
              </li>
              <li>
                {/* <Link >Suporte</Link> */}
              </li>
            </ul>

            <div className="buttons">
              <button className="theme">
                <img src="src\assets\navbar\image-34.png" alt="" />
              </button>

                <Link>
               <button className="login">
                 Login
                </button>
                </Link>

              <Link>
              <button className="cadastro">
              Cadastre-se
              </button>
              </Link>

            </div>
          </div>
        </div>

         {/* <nav className="nav-bar">
          <div className="logo">
            <img src="src\assets\navbar\logo-1.png" alt="" />
          </div>

          <ul>
            <li>
             <Link to='/'>Home</Link> 
            </li>
            <li>
              <Link >Sobre nós</Link>
            </li>
            <li>
              <Link to='../' >Adquira</Link>
            </li>
            <li>
              <Link >Suporte</Link>
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
        </nav>  */}
        
        <nav className="nav-bar">
        <div className="logo">
          <img src="src/assets/navbar/logo-1.png" alt="" />
        </div>
  
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/sobrenos'>Sobre nós</Link>
          </li>
          <li>
            <Link to='/adquira'>Adquira</Link> {/* Corrigido de '../' para '/adquira' */}
          </li>
          <li>
            <Link to='/suporte'>Suporte</Link>
          </li>
        </ul>
  
        <div className="buttons">
          <button className="theme">
            <img src="src/assets/navbar/image-34.png" alt="" />
          </button>
  
          <button className="login">
            <Link to='/login'>Login</Link>
          </button>
  
          <button className="cadastro">
            <Link to='/cadastro'>Cadastre-se</Link>
          </button>
        </div>
      </nav>
      </div>

        </>
    
  );
}
