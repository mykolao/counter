import { Provider } from "react-redux";
import "./App.css";
import store from "../redux/store";
import Counter from "./Counter";
import Settings from "./Settings";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <Settings />
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
