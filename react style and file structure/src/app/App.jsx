import InputGroup from "../components/shared/forms/InputGroup";

const App = () => {
  return (
    <div className="root">
      <InputGroup
        name="title"
        placeholder={"Enter Your Name"}
        label={"Title"}
        error={"something went wrong"}
      />
    </div>
  );
};

export default App;
