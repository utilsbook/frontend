import { Link } from 'react-router-dom';
import Logo from '../../assets/images/codein.jpg';
import './index.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} alt="CodeIn" className="logo" />
      </Link>
    </header>
  );
};

export default Header;
