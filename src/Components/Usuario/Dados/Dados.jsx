import perfilIcon from "../../../assets/Usuario/customer.svg";
import segurancaIcon from "../../../assets/Usuario/shield.svg";
import dadosIcon from "../../../assets/Usuario/data-protection.svg";
import cartaoIcon from "../../../assets/Usuario/magnetic-card.svg";
// import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import "../../../stylesheets/Usuario/user.scss";
import "../../../stylesheets/Usuario/dados/dados.scss";

export default function Dados() {
  // Dados pessoais simulados
  const endereco = "Rua Exemplo, 123";
  const email = "usuario@example.com";
  const senha = "********";
  const telefone = "(11) 99999-9999";

  return (
    <>
      <NavBar />

      <div className="body-user-page">
        <div className="user-info">
          <div className="side-bar">
            <h2>Configuração</h2>
            <div className="side-bar-options">
              <div className="side-bar-itens --perfil">
                <img src={perfilIcon} alt="" />
                <p>
                  <Link to="/usuario">Perfil</Link>
                </p>
              </div>

              <div className="side-bar-itens --seguranca">
                <img src={segurancaIcon} alt="" />
                <p>
                  <Link to="/senha">Senha e Segurança</Link>
                </p>
              </div>

              <div className="side-bar-itens --dados">
                <img src={dadosIcon} alt="" />
                <p>
                  <Link to="/Dados">Dados Pessoais</Link>
                </p>
              </div>

              <div className="side-bar-itens --historico">
                <img src={cartaoIcon} alt="" />
                <p>
                  <Link to="/Historico">Histórico</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="main-content">
            <h2>Dados Pessoais</h2>
            <div className="dados-pessoais">
              <p>
                <strong>Endereço:</strong> {endereco}
              </p>
              <p>
                <strong>Email:</strong> {email}
              </p>
              <p>
                <strong>Senha:</strong> {senha}
              </p>
              <p>
                <strong>Telefone:</strong> {telefone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
