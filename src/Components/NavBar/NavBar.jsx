// import React from 'react';
import { Link } from "react-router-dom";
// import { useState } from "react";
import "../../stylesheets/navbar/index.scss";
import "../../stylesheets/navbar/media.scss";
// import '../../../public/stylesheets/navbar/index.css'
// import '../../../public/stylesheets/navbar/media.css'

//imgs

import menuFechado from "../../assets/navbar/menu-fechado.png";
import menuRoxo from "../../assets/navbar/menu-roxo.png";
import logo from "../../assets/navbar/logo-1.png";
// import theme from "../../assets/navbar/image-34.png";
// import {Translate}  from "@google-cloud/translate";

// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   SignUpButton,
//   UserButton,
// } from "@clerk/clerk-react";
import PageTranslateComponent from "../Translate/Translate";
// import TranslateComponent from "../Translate/Translate.jsx";
// import Usuario from "../Usuario/Usuario";

export default function NavBar() {
  // const [isLoading, setIsLoading] = useState(false);

  // // Creates a client
  // const translate = new Translate();

  // const handleTranslate = async () => {
  //   try {
  //     setIsLoading(true);
  //     const text = document.body.innerText;
  //     const targetLanguage = "ru"; // Change this to the desired target language

  //     // Translates the text into the target language
  //     let [translations] = await translate.translate(text, targetLanguage);
  //     translations = Array.isArray(translations)
  //       ? translations
  //       : [translations];

  //     document.body.innerText = translations[0];
  //   } catch (error) {
  //     console.error("Error translating text:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

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
              img.src = menuFechado; // Novo src da imagem
            } else {
              modal.style.display = "none";
              img.src = menuRoxo; // src original da imagem
            }
          }}
        >
          <img src={menuRoxo} alt="" />
        </button>

        <div className="modal-lateral">
          <div className="conteudo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/sobreNos">Sobre nós</Link>
              </li>
              <li>
                <Link to="/Adquira">Adquira</Link>
              </li>
              <li>
                <Link to="/suporte">Suporte</Link>
              </li>
            </ul>

            <div className="buttons">
              <button className="login">
                <Link to="/login">Login</Link>
              </button>

              <button className="cadastro">
                <Link to="/cadastro">Cadastre-se</Link>
              </button>
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
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobrenos">Sobre nós</Link>
            </li>
            <li>
              <Link to="/adquira">Adquira</Link>
            </li>
            <li>
              <Link to="/suporte">Suporte</Link>
            </li>
          </ul>

          <div className="buttons">
            <button className="theme">
              <PageTranslateComponent />
            </button>

            <button className="login">
              <Link to="/formulario">Login</Link>
            </button>

            <button className="cadastro">
              <Link to="/cadastro">Cadastre-se</Link>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
