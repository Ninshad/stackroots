import './App.css'
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/home';
import Signin from './components/Signin';
import Signup from './components/Signup';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
