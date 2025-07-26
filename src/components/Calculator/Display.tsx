type DisplayProps = {
  expression: string;
  result: string;
};

export const Display = ({ expression, result }: DisplayProps) => (
  <div className="Gold-calculator__screen">
    <span className="Gold-calculator__expression">{expression}</span>
    <span className="Gold-calculator__result">{result}</span>
  </div>
);