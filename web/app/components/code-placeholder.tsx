const CodePlaceholder = ({ code }: { code: string }) => (
  <pre className="refractor language-">
    <code>{code}</code>
  </pre>
);

export default CodePlaceholder;
