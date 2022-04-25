import { Link } from 'react-router-dom';
import './index.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="logo">CodeIn</div>
      </Link>
    </header>
  );
};

export default Header;
