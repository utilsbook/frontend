import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

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

export default CodeBlock;
