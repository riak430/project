import "./App.css";
import Appp from "./components/builder/Builder";
// import Topbar from "./components/navbar";

function App(props) {
  return (
    <div className="App">
      <div className="Menu">
        <Appp />
      </div>
      <div className="Current"></div>
    </div>
  );
}

export default App;
