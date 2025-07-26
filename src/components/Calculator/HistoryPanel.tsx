type HistoryPanelProps = {
  history: string[];
};

export const HistoryPanel = ({ history }: HistoryPanelProps) => (
  <>
    <h3 className="HistoryTitle">История</h3>
    <ul className="HistoryList">
      {history.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </>
);