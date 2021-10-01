import Calculator from "./components/calculator/Calculator";
import Piano from "./components/piano/Piano";
import Leaves from "./components/leaves/Leaves";
import "./App.css";

function App() {
  return (
    <div>
      <div className="appdiv">
        <Calculator />
        <Piano />
      </div>
      <Leaves />
    </div>
  );
}

export default App;
