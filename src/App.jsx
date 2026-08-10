import { Routes, Route } from 'react-router-dom';

// importes de las paginas
import Principal from './views/Principal.jsx';
import Carta from './views/Carta.jsx';

export default function App() {
    return(
        <Routes>
            <Route path="/" element={<Principal />}/>
            <Route path="/Carta" element={<Carta />}/>
            {/* aqui nomas agregar el import y la ruta de la pagina */}
        </Routes>
    );
}