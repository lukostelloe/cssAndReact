import Calculator from "./components/calculator/Calculator";
import Piano from "./components/piano/Piano";
import Leaves from "./components/leaves/Leaves";
import Lamp from "./components/lamp/Lamp";
import Pencil from "./components/pencils/Pencil";
import "./App.css";

function App() {
  return (
    <div>
      <div className="leaves_lamp">
        <Leaves />
        <Lamp />
      </div>
      <div className="pencils">
        <Pencil color="blue" transform="rotate(45deg)" />
        <Pencil color="red" transform="rotate(-45deg)" />
        <Pencil color="green" transform="rotate(-110deg)" />
      </div>
      <div className="appdiv">
        <Calculator />
        <Piano />
      </div>
    </div>
  );
}

export default App;
