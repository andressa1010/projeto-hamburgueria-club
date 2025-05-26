import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home.jsx";
import Carrinho from "./Pages/carrinho.jsx";

const App = () => {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home carrinho={carrinho} setCarrinho={setCarrinho} />} />
        <Route path="/carrinho" element={<Carrinho carrinho={carrinho} setCarrinho={setCarrinho} />} />
      </Routes>
    </Router>
  );
};

export default App;

