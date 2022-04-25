import { Outlet, useParams } from 'react-router-dom';
import Overview from './Overview';

const Component = () => {
  const { slug } = useParams();
  console.log('SLUG', slug);
  return slug !== undefined ? <Outlet /> : <Overview />;
};

export default Component;
