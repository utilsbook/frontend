import { Link } from "react-router-dom";
import LogoImg from "../../assets/images/logo-img.png";
import LogoText from "../../assets/images/logo-text.png";
import "./index.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={LogoImg} alt="CodeIn" className="logo-img" />
        <img src={LogoText} alt="CodeIn" className="logo-text" />
      </Link>
    </header>
  );
};

export default Header;
