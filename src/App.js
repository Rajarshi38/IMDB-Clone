import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Favourites from "./components/Favourites";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

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
