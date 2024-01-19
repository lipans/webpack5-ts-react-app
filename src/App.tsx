import "./App.scss";
import logo from "./logo.png";
import SvgLogo from "./logo.svg";

function App() {
  return (
    <div className="App" data-testid="app">
      <span>webpack5 ts react app</span>
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div>
        <SvgLogo className="svg-logo" />
      </div>
    </div>
  );
}

export default App;
