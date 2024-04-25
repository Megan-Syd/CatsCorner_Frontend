import React from "react";
import { useState } from "react";

interface Course {
  id: bigint;
  name: string;
  description: string;
  schedule: string;
}
interface DashboardProps {
  user: UserType;
  courses: Course[];
}

const Dashboard: React.FC<DashboardProps> = ({ user, courses }) => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === "registered") {
      fetchRegisteredCourses();
    }
  };

  const [registeredCourses, setRegisteredCourses] = useState<Course[]>([]);

  const handleRegister = async (courseId: bigint) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/courses/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ courseId: courseId, userId: user.id }),
        }
      );
      if (response.ok) {
        alert("Registration successful");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Error registering for the course");
    }
  };

  const fetchRegisteredCourses = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/courses/registered`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.ok) {
        const courses: Course[] = await response.json();
        setRegisteredCourses(courses);
      } else {
        alert("Failed to fetch registered courses");
        setRegisteredCourses([]);
      }
    } catch (error) {
      console.error("Error fetching registered courses:", error);
      setRegisteredCourses([]);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Welcome, {user.username}</h1>

      <ul className="nav nav-tabs mt-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "all" ? "active" : ""}`}
            onClick={() => handleTabChange("all")}
          >
            All Courses
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "registered" ? "active" : ""}`}
            onClick={() => handleTabChange("registered")}
          >
            Registered Courses
          </button>
        </li>
      </ul>

      <div className="tab-content mt-3">
        {activeTab === "all" && (
          <div>
            <h2>All Courses</h2>
            <div className="row">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onRegister={handleRegister}
                />
              ))}
            </div>
          </div>
        )}
        {activeTab === "registered" && (
          <div>
            <h2>Registered Courses</h2>
            <div className="row">
              {registeredCourses.length > 0 ? (
                registeredCourses.map((course) => (
                  <CourseCard
                    key={course.id.toString()} 
                    course={course}
                  />
                ))
              ) : (
                <p>No courses registered yet.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

//CourseCard
const CourseCard: React.FC<{
  course: Course;
  onRegister?: (courseId: bigint) => void;
}> = ({ course, onRegister }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{course.name}</h5>
          {showFullDescription ? (
            <>
              <p className="card-text">{course.description}</p>
              <button className="btn btn-link p-0" onClick={toggleDescription}>
                See Less
              </button>
            </>
          ) : (
            <>
              <p className="card-text">
                {course.description.slice(0, 100)}{" "}
                {course.description.length > 100 && (
                  <button
                    className="btn btn-link p-0"
                    onClick={toggleDescription}
                  >
                    See All
                  </button>
                )}
              </p>
              <p>{course.schedule}</p>
            </>
          )}
          {onRegister && (
            <button
              className="btn btn-primary"
              onClick={() => onRegister(course.id)}
            >
              Register
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
