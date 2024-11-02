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

  const somar = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtrair = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicar = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const dividir = () => {
    setResultado(primeiroValor / segundoValor);
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
      <button onClick={somar}>+</button> 
      <button onClick={subtrair}>-</button> 
      <button onClick={multiplicar}>x</button> 
      <button onClick={dividir}>%</button> 
      <p>{resultado}</p>
    </main>
  );
};
