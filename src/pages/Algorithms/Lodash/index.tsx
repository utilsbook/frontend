import { useParams } from 'react-router-dom';
import CodeBlock from '../../../components/CodeBlock';
import isNil from './isNil';

const getStr = (name: string | undefined) => {
  switch (name) {
    case 'isNil':
      return isNil;
    default:
      return '';
  }
};

const Lodash = () => {
  const { slug } = useParams();

  const str = getStr(slug);
  console.log('STR', str);

  return (
    <>
      <CodeBlock>{str}</CodeBlock>
    </>
  );
};

export default Lodash;
