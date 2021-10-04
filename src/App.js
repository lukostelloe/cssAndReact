import Calculator from "./components/calculator/Calculator";
import Piano from "./components/piano/Piano";
import Leaves from "./components/leaves/Leaves";
import Lamp from "./components/lamp/Lamp";
import "./App.css";

function App() {
  return (
    <div>
      <div className="leaves_lamp">
        <Leaves />
        <Lamp />
      </div>
      <div className="appdiv">
        <Calculator />
        <Piano />
      </div>
    </div>
  );
}

export default App;
