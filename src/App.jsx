import { Routes, Route } from 'react-router-dom';

// importes de las paginas
import Principal from './views/Principal.jsx';

export default function App() {
    return(
        <Routes>
            <Route path="/" element={<Principal />}/>
            {/* aqui nomas agregar el import y la ruta de la pagina */}
        </Routes>
    );
}