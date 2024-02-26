import HistoryItem from "./HistoryItem";
import PropTypes from "prop-types";

const HistorySection = ({ histories, handleRestoreBtn, restoredHistory }) => {
  return (
    <div>
      <h3>History</h3>
      {histories.length === 0 ? (
        <p>There is no history</p>
      ) : (
        <ul>
          {histories.map((historyItem) => (
            <HistoryItem
              key={historyItem.id}
              disabled={restoredHistory === historyItem.id}
              historyItem={historyItem}
              handleRestoreBtn={handleRestoreBtn}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

HistorySection.propTypes = {
  histories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      inputs: PropTypes.shape({
        a: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired,
      }).isRequired,
      operation: PropTypes.string.isRequired,
      result: PropTypes.number.isRequired,
      date: PropTypes.object.isRequired,
    })
  ).isRequired,
  handleRestoreBtn: PropTypes.func.isRequired,
  restoredHistory: PropTypes.number.isRequired,
};

export default HistorySection;
