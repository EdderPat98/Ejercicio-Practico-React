import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout  from "./pages/Layout";
import Lista  from "./pages/Lista";
import Contador  from "./pages/Contador";
import Default  from "./pages/Default";
import Formulario  from "./pages/Formulario";
import Integracion  from "./pages/Integracion";
function App() {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route path="Lista" element={<Lista />} />
           <Route path="/" element={<Contador />} />
           <Route path="Formulario" element={<Formulario />} />
           <Route path="Integracion" element={<Integracion />} />
           <Route path="*" element={<Default />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
