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

export default function App(){
  return (
<>
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/Adquira' element={<Adquira/>} />
        <Route path='/Sobrenos' element={<SobreNos/>} />
        <Route path='/Suporte' element={<Suporte/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Cadastro' element={<Cadastro/>} />
      </Routes>
        </>
);
}
