import useCounter from "./hooks/useCounter";

const CountController = ({ count, handleInc, handleDec }) => {
  return (
    <div>
      <button onClick={handleInc}>+</button>
      <span>{count}</span>
      <button onClick={handleDec}>-</button>
    </div>
  );
};

const App = () => {
  const {
    count: count1,
    handleInc: handleInc1,
    handleDec: handleDec1,
  } = useCounter({ lowerBound: -10 });

  const {
    count: count2,
    handleInc: handleInc2,
    handleDec: handleDec2,
  } = useCounter({ initial: 5, upperBound: 15, lowerBound: -5 });

  const {
    count: count3,
    handleInc: handleInc3,
    handleDec: handleDec3,
  } = useCounter({ initial: 10, upperBound: 20 });

  return (
    <div>
      <CountController
        count={count1}
        handleInc={handleInc1}
        handleDec={handleDec1}
      />

      <CountController
        count={count2}
        handleInc={handleInc2}
        handleDec={handleDec2}
      />

      <CountController
        count={count3}
        handleInc={handleInc3}
        handleDec={handleDec3}
      />
    </div>
  );
};

export default App;
