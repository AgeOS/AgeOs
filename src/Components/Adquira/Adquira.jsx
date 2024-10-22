import Veia from '../../assets/Adquira/Veia.png'
import celular from '../../assets/Adquira/celular.png'
import Approval from '../../assets/Adquira/Approval.png'
import Paint from '../../assets/Adquira/Paint.png'
import Security from '../../assets/Adquira/Security.png'
import Logo from '../../assets/Adquira/Logo.png'

import '../../stylesheets/Adquira/Adquira.scss'


function Adquira() {
    return (
        <><div className='adquira_topo'>
            <p>O mais vantajoso para sua família! </p>
            <h1>Contrate o pacote  <span> Premium!</span></h1>
            <div>
                <img className='Veia' src={Veia} alt="idosa" />
            </div>
            <div className='circulo'>
                <svg width="530" height="578" viewBox="0 0 509 499" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.14879 422.067C5.39336 188.026 196.043 0 430.108 0H509V575L284.5 558L0.5 541L2.14879 422.067Z" fill="#9A78C9" />
                </svg>
            </div>
        </div><button className='Comprar'>Adquira o pacote</button>
        <svg className='svg2' width="1004" height="62" viewBox="0 0 1004 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-47 60C-47 60 79.2315 6.37667 397.056 2.50327C714.881 -1.37013 905.511 18.1169 1003 26.6637" stroke="#FFDB10" stroke-width="3"/>
        </svg>
        <div className='cel'><img className='celular' src={celular} alt="celular" /></div>
        <section className='grupo'>
            <div className='figgs'>
                <img className='apro' src={Approval} />
                <h4>garantia</h4>
                <p className='textin'>A custom rom fica salva em seu email. podendo utilizá-la em outros dispositivos.</p>
            </div>
            <div className='figgs'>
                <img className='sec' src={Security} />
                <h4>segurança</h4>
                <p className='textin'>Um sistema operacional feito para prevenir nossos clientes de golpes em gerais.</p>
            </div>
            <div className='figgs'>
                <img className='pinc' src={Paint} />
                <h4>estilização</h4>
                <p className='textin'>Podendo escolher o estilo do seu launcher, cores, fontes, imagens. De acordo com o seu gosto.</p>
            </div>
        </section>
        <section className='plano'>
            <div className='compras'>
                <h2>Pacote Básico</h2>
                <img className='logo' src={Logo} alt="Logo" />
                <ul className='textoss'>
                    <li className='textinho'>Sistema apenas para um aparelho</li>
                    <li className='textinho'>Valor fixo por sistema</li>
                    <li className='textinho'>Somente atualizações estáveis</li>
                    <li className='textinho'>Segurança para phishing e golpes</li>
                    <li className='textinho'>Identificador de chamadas suspeitas</li>
                    <li className='textinho'>Segurança reforçada em apps financeiros</li>
                </ul>
                <button className='Preco'>R$69,99</button>
            </div>
            <div className='divisao'>recomendado</div>
            <div className='compras2'>
                <h2>Pacote Premium</h2>
                <img className='logo2' src={Logo} alt="Logo" />
                <ul className='textoss'>
                    <li className='textinho'>Sistema para cinco aparelhos</li>
                    <li className='textinho'>Valor promocional</li>
                    <li className='textinho'>Acesso antecipado a atualizações</li>
                    <li className='textinho'>Segurança para phishing e golpes</li>
                    <li className='textinho'>Identificador de chamadas suspeitas</li>
                    <li className='textinho'>Segurança reforçada em apps financeiros</li>
                    <li className='textinho'>Pacote personalizado</li>
                    <li className='textinho'>Suporte para backup</li>
                </ul>
                <button className='Preco2'>R$229,99</button>
            </div>
        </section>
        </>
    )
}

export default Adquira