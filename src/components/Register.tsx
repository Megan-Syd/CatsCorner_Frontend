import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { PasswordField } from "./PasswordField";
import { OAuthButtonGroup } from "./OAuthButtonGroup";

export const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        {
          email: email,
          password: password,
          username: username,
        }
      );
      console.log("Registration successful", response.data);
      alert("Registration successful");
      navigate("/login");
    } catch (error: any) {
      console.error(
        "Registration error:",
        error.response?.data || error.message
      );

      alert(
        "Registration error: " + (error.response?.data.message || error.message)
      );
    }
  };

  return (
    <div className="container-lg py-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center">
            <h2 className="mt-4 mb-3">Create an account</h2>
            <p className="mb-4">
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-none">
                Log in
              </Link>
            </p>
          </div>
          <div className="p-4 bg-light rounded shadow-sm">
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <PasswordField
                  id="password"
                  name="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg w-100 mb-4"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
        <OAuthButtonGroup />
      </div>
    </div>
  );
};

export default Register;
