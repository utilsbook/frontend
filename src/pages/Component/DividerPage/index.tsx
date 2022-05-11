import CodeBlock from '../../../components/CodeBlock';
import code from './code';

interface DividerProps {}

const DividerPage: React.FC<DividerProps> = () => {
  return (
    <>
      <h1>分割线 Divider</h1>
      <hr />
      <h2>Js / Ts</h2>
      <CodeBlock>{code.code}</CodeBlock>
      <h2>Style</h2>
      <CodeBlock language="less">{code.style}</CodeBlock>
    </>
  );
};

export default DividerPage;
