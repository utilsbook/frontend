import './index.scss';

interface MainProps {
  children?: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return <div className="main">{children}</div>;
};

export default Main;
