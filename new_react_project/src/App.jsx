import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import List from "./pages/List";
import Rankings from "./pages/Rankings";
import HomeMap from "./pages/HomeMap";


function App() {
  return (
    <>
    <BrowserRouter>
    <nav className="navbar container">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
        <Link to="/list" className="nav-link">List</Link>
        <Link to="/rankings" className="nav-link">Rankings</Link>
        <Link to="/homemap" className="nav-link">Home Map</Link>
    </nav>

    <div className="container card" style={{ marginTop: '20px', padding: '18px 20px' }}>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/list" element={<List />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/homemap" element={<HomeMap />} />
      </Routes>
    </div>

    </BrowserRouter>
    </>
  );
}

export default App;