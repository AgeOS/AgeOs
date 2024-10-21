import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import "../../stylesheets/formulario/index.scss";
import "../../stylesheets/formulario/media.scss";
import pix from '../../assets/formulario/pix.png'
import visa from '../../assets/formulario/visa.png'


const Formulario = () => {
    return (
        <>
        <NavBar/>

        <h1 className='title1'>Preencha os dados</h1>
      <div className="form-container">

        <form>
          <div className="input-group">
            <label htmlFor="nome">Nome Completo:</label>
            <input type="text" id="nome" placeholder="Nome Completo" />
          </div>
          
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Email" />
          </div>
          
          <div className="input-group">
            <label htmlFor="telefone">Telefone:</label>
            <input type="tel" id="telefone" placeholder="Telefone" />
          </div>
          
          <div className="input-group cep-group">
            <label>CEP: 
            <input type="text" id="cep" placeholder="CEP" /></label>

            <label>Estado:
            <input type="text" id="estado" placeholder="Estado" /></label>
            
            <label>Nº:
            <input type="text" id="numero" placeholder="Número" /></label>
          </div>
          
          <div className="input-group">
            <label htmlFor="rua">Rua:</label>
            <input type="text" id="rua" placeholder="Rua" />
          </div>
          
          <div className="pacote-info">
            <span>Pacote Comprado: <strong>Pacote Premium</strong></span>
            <span>Valor: <strong>R$229,99</strong></span>
          </div>
          
          <div className="pagamento">
            <span>Formas de pagamento:</span>
            <div className="pagamento-opcoes">
              <img src={visa} alt="Cartão de Crédito" />
              <img src={pix} alt="Pix" />
            </div>
          </div>
          
          <button type="submit" className="botao-pagamento">Ir para o pagamento</button>
        </form>
      </div>
      </>
    );
  };
  
  export default Formulario;