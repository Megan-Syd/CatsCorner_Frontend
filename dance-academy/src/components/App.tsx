import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Class from "./Class";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/classes" element={<Class />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
