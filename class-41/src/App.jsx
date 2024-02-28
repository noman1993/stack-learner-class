import UseApp from "./components/UseApp";
const App = () => {
  const { users, loading, id, max, nextHandler, previousHandler } = UseApp();

  return (
    <div>
      <h1>Users Details: User No -{id}</h1>
      {loading && <h2>Loading...</h2>}
      {!loading && users && (
        <div>
          <h2>name: {users.name}</h2>
          <h2>email: {users.email}</h2>
          <h2>phone: {users.phone}</h2>
        </div>
      )}

      <button onClick={previousHandler} disabled={id === 1}>
        previous
      </button>
      <button onClick={nextHandler} disabled={id === max}>
        next
      </button>
    </div>
  );
};

export default App;
