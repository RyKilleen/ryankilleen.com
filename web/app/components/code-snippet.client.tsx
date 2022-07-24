import Refractor from "react-refractor";
import { useEffect, useState } from "react";
import CodePlaceholder from "./code-placeholder";

type CodeProps = {
  language: string;
  code: string;
};
const Snippet = ({ language, code }: CodeProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const loadLang = async () => {
      const { default: lang } = await import(
        `https://esm.sh/refractor@4.7.0/lang/${language}`
      );

      Refractor.registerLanguage(lang);
      setIsLoaded(true);
    };
    loadLang();
  });
  return isLoaded ? (
    <Refractor language={language} value={code} />
  ) : (
    <CodePlaceholder code={code} />
  );
};

export default Snippet;
