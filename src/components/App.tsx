import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import CourseList from "./CourseList";
import Contact from "./Contact";
import Login from "./Login";
import Footer from "./Footer";
import Register from "./Register";
import { useState, useEffect } from "react";
import Home from "./Home";
import About from "./AboutUs";

function App() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:8080/api/courses")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data); // Set the fetched data to the state
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array to run the effect only once when the component mounts
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/programms" element={<CourseList courses={courses} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
