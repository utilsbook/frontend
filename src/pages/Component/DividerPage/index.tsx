import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import code from './code';

interface CodeBlockProps {
  code?: string;
  children?: string;
  language?: string;
}
const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  children,
  language = 'javascript',
  ...props
}) => {
  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus} {...props}>
      {code || children || ''}
    </SyntaxHighlighter>
  );
};

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
