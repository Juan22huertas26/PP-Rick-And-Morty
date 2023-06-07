import './App.css';
import { Routes, Route } from "react-router-dom"

import Login from './componentes/prueba';
import Home from './componentes/Home/Home';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={< Login />} />
      <Route exact path="/home" element={< Home />} />
      </Routes>
    </div>
  );
}

export default App;
