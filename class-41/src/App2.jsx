import $ from "jquery";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    $("#btn").on("click", () => {
      alert("hello world");
    });
  });

  return (
    <div>
      <h1 id="test">Hello World</h1>
      <button id="btn">Click ME</button>
    </div>
  );
}

export default App;
