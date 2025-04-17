import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./Cartitas";
import Login from "./login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;