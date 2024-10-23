import React, { useState } from 'react';
import "../../stylesheets/cartao/index.scss";
import "../../stylesheets/cartao/media.scss";
import NavBar from '../NavBar/NavBar.jsx';
import cartao from '../../assets/cartao/cartao.png'


const Credito = () => {
  const [cpf, setCpf] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Compra confirmada!');
  };

  return (
    <>
    <NavBar/>
    <div className="creditocontainer">
         
      <form onSubmit={handleSubmit} className="creditoform">
        <label htmlFor="#">CPF</label>
        <input
          type="text"
          maxLength={11}
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          placeholder="CPF"
        />

        <label htmlFor="#">Bandeira</label>
        <select> 
          <option value="MasterCard">MasterCard</option>
          <option value="Visa">Visa</option>
          <option value="Elo">Elo</option>
          <option value="Amex">American Express</option>
        </select>

        <label htmlFor="#">Número do Cartão</label>
        <input
          type="text"
          maxLength={21}
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Digite o Nº do Cartão"/>

          <label htmlFor="#">Nome</label>
        <input
          type="text"
          maxLength={35}
          value={nameOnCard}
          onChange={(e) => setNameOnCard(e.target.value)}
          placeholder="Nome Impresso no Cartão"/>

          <label htmlFor="#">Validade</label>
        <input
          type="text"
          maxLength={13}
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          placeholder="Vencimento (MM/AA)"/>

          <label htmlFor="#">CVV</label>
        <input
          type="password"
          maxLength={8}
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          placeholder="Código de Verificação do Cartão"/>
        <button type="submit" className="confirme-button">Confirmar Compra</button>
      </form>

      <div class="creditoprev">
        <img class="card-image" src={cartao} alt="Imagem do Cartão"/>
      </div>

      
        
      
    </div>
    </>
  );
};

export default Credito;