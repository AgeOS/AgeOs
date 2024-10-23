import { Routes , Route } from 'react-router-dom';
// import NavBar from "./Components/NavBar/NavBar";
import './stylesheets/index.scss'
// import NavBar from './Components/NavBar/NavBar';
import Home from './Components/home/home';
import Adquira from './Components/Adquira/Adquira';
import SobreNos from './Components/sobrenos';
import Suporte from './Components/suporte/Suporte';
import Login from './Components/login/Login';
import Cadastro from './Components/cadastro/Cadastro';

export default function App() {
  return (
<>
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/adquira' element={<Adquira/>} />
        <Route path='/sobrenos' element={<SobreNos/>} />
        <Route path='/suporte' element={<Suporte/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cadastro' element={<Cadastro/>} />
      </Routes>
        </>
);
}
