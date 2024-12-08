import { useState } from "react";
import NavBar from "../NavBar/NavBar.jsx";
import "../../stylesheets/formulario/index.scss";
import "../../stylesheets/formulario/media.scss";
import pix from "../../assets/formulario/pix.png";
import visa from "../../assets/formulario/visa.png";
import { Link } from "react-router-dom";
import logo from "../../assets/Adquira/logo.png";

import "../../stylesheets/Adquira/Adquira.scss";
import "../../stylesheets/formulario/index.scss";

const Formulario = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  const handlePayment = (event) => {
    event.preventDefault();
    const form = document.getElementById("purchase-form");
    const inputs = form.querySelectorAll("input[required]");
    let allFilled = true;

    inputs.forEach((input) => {
      if (!input.value) {
        allFilled = false;
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    });

    if (!selectedPayment) {
      alert("Por favor, selecione uma forma de pagamento.");
      return;
    }

    if (!allFilled) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (selectedPayment === "visa") {
      window.location.href = "https://buy.stripe.com/00g5kq0nT83sdQk145";
    } else if (selectedPayment === "pix") {
      window.location.href = "";
    }
  };

  return (
    <>
      <NavBar />

      <div className="form-page">
        <h1>Formulário de Compra</h1>

        <div className="card">
          <div className="side-form">
            <div className="preencha">
              <h3>Preencha os Dados</h3>
            </div>
            <form id="purchase-form" action="" method="">
              <label htmlFor="nomeCompleto">Nome Completo</label>
              <input type="text" required />

              <label htmlFor="email">Email:</label>
              <input type="text" />

              <label htmlFor="cpf">CPF:</label>
              <input type="number" max="12" required />

              <label htmlFor="telefone">Telefone:</label>
              <input type="tel" required />

              <div className="address">
                <label htmlFor="cep">CEP:</label>
                <input type="text" max="8" maxLength="8" required />

                <label htmlFor="estado">Estado:</label>
                <input type="text" required />

                <label htmlFor="numero">№</label>
                <input type="number" required />
              </div>

              <label htmlFor="rua">Rua:</label>
              <input type="text" required />

              <div className="formas-pagamento">
                <h3>Formas de pagamento</h3>
                <div className="buttons">
                  <button
                    type="button"
                    className={selectedPayment === "visa" ? "selected" : ""}
                    onClick={() => handlePaymentSelection("visa")}
                  >
                    <img src={visa} alt="cartão de crédito visa" />
                    <p>Cartão de Crédito</p>
                  </button>

                  <button
                    type="button"
                    className={selectedPayment === "pix" ? "selected" : ""}
                    onClick={() => handlePaymentSelection("pix")}
                  >
                    <img src={pix} alt="Pix" />
                    <p>Pix</p>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="package-side">
            <div className="pacote-escolhido">
              <h3>Pacote Escolhido</h3>
            </div>

            <div className="pacote-premium ">
              <h2>Pacote Premium</h2>
              <img src={logo} alt="" />

              <ul>
                <li>Sistema para cinco aparelhos</li>
                <li>Valor promocional</li>
                <li>Acesso antecipado a atualizações</li>
                <li>Segurança para phishing e golpes</li>
                <li>Identificador de chamadas suspeitas</li>
                <li>Segurança reforçada em apps financeiros</li>
                <li>Pacote personalizado</li>
                <li>Suporte para backup</li>

                <Link>
                  <button>R$ 229,99</button>
                </Link>
              </ul>

              <a className="pagamento-final" onClick={handlePayment}>
                <button>Ir para o Pagamento</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formulario;
