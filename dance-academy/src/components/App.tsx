import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Class from "./Class";
import Contact from "./Contact";
import Login from "./Login";
import Footer from "./Footer";
import Register from "./Register"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/classes" element={<Class />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
