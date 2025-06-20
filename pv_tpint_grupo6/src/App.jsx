import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import NavBar from './components/NavBar';
import Home from "./pages/Home";
import Favorites from './pages/Favorites';
import "./App.css";

function App() {
  return (
    <AppProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
