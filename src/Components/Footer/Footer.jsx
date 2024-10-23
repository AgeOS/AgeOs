/* eslint-disable react/prop-types */
import '../../stylesheets/footer/footer.scss'
import '../../stylesheets/footer/media.scss'



export default function Footer({foto , color , you , insta , face , linke}){

    return(
    <>
     <footer style={{color:color }}>

        <img className='fundo' src={foto} alt="" />
     
      
      <div className="content" style={{color:color }}>
        <div className="section " >
          <h3 style={{color:color }} className='table'>Descubra</h3>
          <ul >
            <li><a style={{color:color }} href="#">Interface</a></li>
            <li><a style={{color:color }} href="#">Benefícios</a></li>
            <li className='none'>.</li>
          </ul>
        </div>

        <div className="section">
          <h3 style={{color:color }} className='table'>Suporte</h3>
          <ul>
            <li><a style={{color:color }} href="#">Fale conosco</a></li>
            <li><a style={{color:color }} href="#">Dúvidas</a></li>
            <li><a style={{color:color }} href="#">Fórum</a></li>
          </ul>
        </div>

        <div className="section">
          <h3 style={{color:color }} className='table'>Sobre</h3>
          <ul>
            <li><a style={{color:color }} href="#">Sobre nós</a></li>
            <li><a style={{color:color }} href="#">Contato</a></li>
            <li><a style={{color:color }} href="#">Política de privacidade</a></li>
          </ul>
        </div>

        <div className="section">
          <h3 style={{color:color }}>Siga nossos perfis</h3>
          <div className="social">
            <a href="#"><img src={you} alt="" /></a>
            <a href="#"><img src={insta} alt="" /></a>
            <a href="#"><img src={face} alt="" /></a>
            <a href="#"><img src={linke} alt="" /></a>
          </div>
          
          <div className="newsletter">
            <h4>Digite seu e-mail para receber mais informações</h4>
            <div className="form">
              <input style={{color:color }} type="email" placeholder="Entre com o endereço de e-mail" />
              <button type="submit">Enviar</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom" style={{borderColor:color }} >
        <p>© 2024 AgeOS | Todos os direitos reservados</p>
      </div>

     </footer>
    </>
    )
}
