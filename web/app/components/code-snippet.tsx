import Refractor from "react-refractor";
import js from "refractor/lang/javascript";
import tsx from "refractor/lang/tsx";
Refractor.registerLanguage(js);
Refractor.registerLanguage(tsx);

const Snippet = ({ language, code }: any) => (
  <Refractor language={language} value={code} />
);

export default Snippet;
