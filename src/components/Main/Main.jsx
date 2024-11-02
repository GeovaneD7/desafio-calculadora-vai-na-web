import { useState } from "react";

export default function Main() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };

  return (
    <main>
      <h1>Calculadora Vai na Web</h1>
      <input 
        type="text" 
        placeholder="Primeiro digito"
        onChange={capturandoPrimeiroValor}
      />
      <input 
        type="text" 
        placeholder="Segundo digito"
        onChange={capturandoSegundoValor}
      />
    </main>
  );
};
