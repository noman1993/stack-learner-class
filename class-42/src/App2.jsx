import useCounter from "./hooks/useCounter";

const CountController = (props) => {
  const { count, handleInc, handleDec } = useCounter({ ...props });
  return (
    <div>
      <button onClick={handleInc}>+</button>
      <span>{count}</span>
      <button onClick={handleDec}>-</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <CountController lowerBound={-10} />

      <CountController initial={5} lowerBound={-5} upperBound={15} />

      <CountController initial={10} upperBound={20} />
    </div>
  );
};

export default App;
