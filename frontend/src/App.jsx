import Header from "./components/header.js";
import Dashboard from "./pages/Dashboard.js";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Dashboard />
    </div>
  );
}

export default App;
