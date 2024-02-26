/**
 * DONE: Handle User Input Fields
 * Done: Handle operations
 * DONE: Handle a list of histories
 * DONE: Render history list
 * @TODO: Restore the history
 */

import { useState } from "react";
import InputSection from "./components/Inputs/InputSection";
import OperationSection from "./components/operation/OperationSection";
import HistorySection from "./components/history/HistorySection";

function* generateId() {
  let id = 0;

  while (true) {
    yield id++;
  }
}

const getId = generateId();

const initialInputState = {
  a: 0,
  b: 0,
};

const App = () => {
  const [inputState, setInputState] = useState({ ...initialInputState });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [restoredHistory, setRestoredHistory] = useState(null);

  const handleInputChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const handleClearOps = () => {
    setInputState({ ...initialInputState });
    setResult(0);
  };

  const handleArithmeticOps = (operation) => {
    if (!inputState.a || !inputState.b) {
      alert("Invalid Input");
      return;
    }

    const f = new Function(
      "operation",
      `return ${inputState.a} ${operation} ${inputState.b}`
    );
    const result = f(operation);
    setResult(result);

    // setResult(eval(`${inputState.a} ${operation} ${inputState.b}`));

    const history = {
      id: getId.next().value,
      inputs: { ...inputState },
      operation,
      result,
      date: new Date(),
    };
    setHistories([history, ...histories]);
  };

  const handleRestoreBtn = (history) => {
    setInputState({ ...history.inputs });
    setResult(history.result);
    setRestoredHistory(history.id);
  };

  // const handleInputA = (e) => {
  // 	setInputState({
  // 		...inputState,
  // 		a: parseInt(e.target.value),
  // 	});
  // };

  // const handleInputB = (e) => {
  // 	setInputState({
  // 		...inputState,
  // 		b: parseInt(e.target.value),
  // 	});
  // };

  // const handleInputChange = (key, value) => {
  // 	setInputState({
  // 		...inputState,
  // 		[key]: parseInt(value),
  // 	});
  // };

  // const handleInputChange = (inp) => {
  // 	setInputState({
  // 		...inputState,
  // 		...inp,
  // 	});
  // };

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h1>Result: {result}</h1>
      <InputSection inputs={inputState} handleInputChange={handleInputChange} />
      <OperationSection
        handleArithmeticOps={handleArithmeticOps}
        handleClearOps={handleClearOps}
      />
      <HistorySection
        histories={histories}
        handleRestoreBtn={handleRestoreBtn}
        restoredHistory={restoredHistory}
      />
    </div>
  );
};

export default App;
