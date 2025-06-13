import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/producto/:id" element={<ProductoDetalle />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
