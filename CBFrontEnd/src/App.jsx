import Header from "./components/header.jsx";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard.jsx";
import Saved from "./pages/Saved.jsx";
import SignUp from "./pages/SignUp.jsx";
import View from "./pages/View.jsx";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes> 
        <Route path="/" element = {<Login/>}/>
        <Route path="/signUp" element ={<SignUp/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/saved/view/:id" element={<View />} />
      </Routes>
    </div>
  );
}

export default App;
