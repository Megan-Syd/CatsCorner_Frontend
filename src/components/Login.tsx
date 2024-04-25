import React, { useState } from "react";
import axios from "axios";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
import { PasswordField } from "./PasswordField";
import { Link, useNavigate } from "react-router-dom";

interface LoginProps {
  onLogin: (user: UserType) => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email,
          password,
        }
      );
      console.log("Login successful", response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      const userData: UserType = response.data.user;
      onLogin(userData);
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Login error", error.response?.data || error.message);
      alert("Login failed: " + (error.response?.data.message || error.message));
    }
  };

  return (
    <div className="container-lg py-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center">
            <h2 className="mt-4 mb-3">Log in to your account</h2>
            <p className="mb-4">
              Don't have an account?{" "}
              <Link to="/register" className="text-decoration-none">
                Sign up
              </Link>
            </p>
          </div>
          <div className="p-4 bg-light rounded shadow-sm">
            <form onSubmit={handleLogin}>
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
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <PasswordField
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3 form-check d-flex justify-content-between">
                <div>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-decoration-none">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg w-100 mb-4"
              >
                Sign in
              </button>
              <hr />
              <p className="text-center mb-3">or continue with</p>
              <div className="btn-group d-grid gap-2">
                <OAuthButtonGroup />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
