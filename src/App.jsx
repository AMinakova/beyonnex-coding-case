import { TemperatureDisplayComponent } from "./TemperatureDisplayComponent";
import "./App.css";

function App() {
  return (
    <TemperatureDisplayComponent
      current={16}
      max={23}
      min={2}
    ></TemperatureDisplayComponent>
  );
}

export default App;
