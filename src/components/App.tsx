import "./App.css";
import Counter from "./Counter";
import Settings, { CounterValues } from "./Settings";

function App() {
  const onSetHandler = (values: CounterValues) => {};

  return (
    <div className="app-container">
      <Settings onSet={onSetHandler} />
      <Counter />
    </div>
  );
}

export default App;
