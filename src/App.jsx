import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import NavBar from "./components/NavBar";
import NeuralInfo from "./pages/NeuralInfo";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/learn" element={<NeuralInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
