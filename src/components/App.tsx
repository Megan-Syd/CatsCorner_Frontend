import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import CourseList from "./CourseList";
import Contact from "./Contact";
import Login from "./Login";
import Footer from "./Footer";
import Register from "./Register";
import Home from "./Home";
import Dashboard from "./Dashboard";
import About from "./AboutUs";
import Instructor from "./Instructor";
import FAQ from "./FAQ";
import { useState, useEffect } from "react";

function App() {
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/courses");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCourses();
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined" && storedUser !== "null") {
      try {
        const userObject = JSON.parse(storedUser);
        setUser(userObject);
      } catch (e) {
        console.error("Parsing error:", e);
      }
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <Router>
      <div>
        <Navbar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/programms" element={<CourseList courses={courses} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/instructors" element={<Instructor />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />

          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login onLogin={(user) => setUser(user)} />}
          />
          {user && (
            <Route
              path="/dashboard"
              element={
                user ? (
                  <Dashboard user={user} courses={courses} />
                ) : (
                  <Login onLogin={(user) => setUser(user)} />
                )
              }
            />
          )}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
