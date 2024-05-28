import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import './Header.scss'

interface HeaderPropsType {
  from?: string;
}

const Header: React.FC<HeaderPropsType> = ({ from }) => {
    return (
      <header className="header-container">
        <img className="header-img" src={Logo} alt="Logo du site kasa" />
        <nav>
          <Link
            className={`nav-item ${from === "home" ? "selected" : ""}`}
            to={"/"}
          >
            Accueil
          </Link>
          <Link
            className={`nav-item ${from === "about" ? "selected " : ""}`}
            to={"/About"}
          >
            A Propos
          </Link>
        </nav>
      </header>
    );
}

export default Header