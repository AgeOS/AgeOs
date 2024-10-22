import '../../stylesheets/footer/footer.scss'
import '../../stylesheets/footer/media.scss'


export default function Footer(){
    return(
    <>
     <footer>
     <div className="waves">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
      
      <div className="content">
        <div className="section">
          <h3>Descubra</h3>
          <ul>
            <li><a href="#">Interface</a></li>
            <li><a href="#">Benefícios</a></li>
          </ul>
        </div>

        <div className="section">
          <h3>Suporte</h3>
          <ul>
            <li><a href="#">Fale conosco</a></li>
            <li><a href="#">Dúvidas</a></li>
            <li><a href="#">Fórum</a></li>
          </ul>
        </div>

        <div className="section">
          <h3>Sobre</h3>
          <ul>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Política de privacidade</a></li>
          </ul>
        </div>

        <div className="section">
          <h3>Siga nossos perfis</h3>
          <div className="social">
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
          
          <div className="newsletter">
            <h4>Digite seu e-mail para receber mais informações</h4>
            <div className="form">
              <input type="email" placeholder="Entre com o endereço de e-mail" />
              <button type="submit">Enviar</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom">
        <p>© 2024 AgeOS | Todos os direitos reservados</p>
      </div>

     </footer>
    </>
    )
}
