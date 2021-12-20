import "./App.css";
import Counter from "./Counter";
import Settings from "./Settings";

const App = () => {
  return (
    <div className="app-container">
      <Settings />
      <Counter />
    </div>
  );
};

export default App;
