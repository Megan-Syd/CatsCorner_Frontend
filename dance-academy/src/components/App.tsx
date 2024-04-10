import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Class from "./Class";
import Contact from "./Contact";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/classes" element={<Class />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

