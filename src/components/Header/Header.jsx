import logo from "../../assets/vaiNaWebLogo.svg"
import "./headerStyle.scss"

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Logo estilizada escrito Vai na Web" />
      <a target="_blank" href="https://github.com/GeovaneD7/desafio-calculadora-vai-na-web">Sobre</a>
    </header>
  );
};
