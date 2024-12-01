import perfilIcon from "../../../assets/Usuario/customer.svg";
import segurancaIcon from "../../../assets/Usuario/shield.svg";
import dadosIcon from "../../../assets/Usuario/data-protection.svg";
import cartaoIcon from "../../../assets/Usuario/magnetic-card.svg";
// import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import "../../../stylesheets/Usuario/user.scss";
import "../../../stylesheets/Usuario/historico/historico.scss";

export default function Historico() {
  const historicoCompras = [
    {
      id: 1,
      pacote: "Pacote Premium",
      dataCompra: "20/10/2023",
      descricao: "Acesso completo a todos os recursos premium.",
    },
    {
      id: 2,
      pacote: "Pacote Básico",
      dataCompra: "28/10/2024",
      descricao: "Acesso completo a todos os recursos do pacote Básico.",
    },
  ];
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
            <h2>Histórico de Compras</h2>
            <div className="compras">
              {historicoCompras.length > 0 ? (
                historicoCompras.map((item) => (
                  <div key={item.id} className="historico-item">
                    <h3>{item.pacote}</h3>
                    <p>Data da Compra: {item.dataCompra}</p>
                    <p>{item.descricao}</p>
                  </div>
                ))
              ) : (
                <p>Você ainda não realizou nenhuma compra.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
