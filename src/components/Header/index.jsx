import  './Header.module.css';

import { useState, useEffect } from "react"

function Header() {

  const [count, setCount] = useState(0);

  function seconds () {
    setCount(count => count + 1);
  };

  // Configurando o intervalo para atualizar o tempo a cada segundo
  useEffect(() => {
    const interval = setInterval(seconds, 1000);
      
      // Limpar o intervalo quando o componente for desmontado
      return () => clearInterval(interval);
    }, []); // O array vazio garante que o intervalo seja configurado apenas uma vez
  
    // Calcular minutos e segundos
    const min = String(Math.floor(count / 60)).padStart(2, '0');
    const sec = String(count % 60).padStart(2, '0');

  return (
  
    <header className="app-header">
      <h1>Quiz Interativo</h1>
      <p>Tempo {min}:{sec}</p>
    </header>


  );
}

export default Header;