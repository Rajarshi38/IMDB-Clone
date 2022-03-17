import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Favourites from "./components/Favourites/Favourites";
import Home from "./components/Home/Home";
import Navbar from "./components/Utils/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </Router>
  );
}

export default App;
