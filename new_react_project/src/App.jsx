import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";


function App() {
  return (
    <>

    
    <BrowserRouter>
    <nav className="text-[30px] text-center font-bold">
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/profile">Profile</Link>
    </nav>

    <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>


    </BrowserRouter>
    </>
  );
}

export default App;