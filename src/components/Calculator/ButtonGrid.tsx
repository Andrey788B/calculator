type ButtonGridProps = {
  onButtonClick: (value: string) => void;
};

const buttons: string[][] = [
  ['MRC', 'M-', 'M+', '%', '÷'],
  ['OFF', '7', '8', '9', '×'],
  ['√', '4', '5', '6', '−'],
  ['→', '1', '2', '3', '+'],
  ['AC', '0', '00', '.', '=']
];

export const ButtonGrid = ({ onButtonClick }: ButtonGridProps) => (
  <div className="Gold-calculator__buttons">
    {buttons.map((row, i) => (
      <div key={i} className="Pillar">
        {row.map((btn, j) => (
          <button
            key={j}
            className="Gold-btn"
            onClick={() => onButtonClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    ))}
  </div>
);