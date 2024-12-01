import perfilIcon from "../../../assets/Usuario/customer.svg";
import segurancaIcon from "../../../assets/Usuario/shield.svg";
import dadosIcon from "../../../assets/Usuario/data-protection.svg";
import cartaoIcon from "../../../assets/Usuario/magnetic-card.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavBar from "../../NavBar/NavBar";
import "../../../stylesheets/Usuario/senha/senha.scss";
import "../../../stylesheets/Usuario/user.scss";

export default function Senha() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para validar e atualizar a senha
    // Implementar autenticação de segurança aqui
  };
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

          <div className="password-screen">
            <h2>Alterar Senha</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Senha Atual</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Nova Senha</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Confirmar Nova Senha</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              {/* Placeholder para autenticações de segurança adicionais */}
              <button type="submit">Atualizar Senha</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
