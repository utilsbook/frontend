import { Link } from 'react-router-dom';
import LogoImg from '../../assets/images/codein-header.png';
import './index.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={LogoImg} alt="CodeIn" className="logo-img" />
      </Link>
    </header>
  );
};

export default Header;
