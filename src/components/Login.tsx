import { OAuthButtonGroup } from "./OAuthButtonGroup";
import { PasswordField } from "./PasswordField";
import { Link } from "react-router-dom";
import React, { useState, ChangeEvent, FormEvent } from 'react';

export const Login = () => {

  const [formData, setFormData] = useState({
    password: '',
    username: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      window.location.href = '/home';
      // Redirect to dashboard or any other page on successful login
    } catch (error: any) {
      console.error('Error during login:', error.message);
    }
  };

  return(
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
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} autoComplete="current-password" required />
            </div>
            <div className="mb-3 form-check d-flex justify-content-between">
              <div>
                <input type="checkbox" className="form-check-input" id="rememberMe" defaultChecked />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-decoration-none">
                Forgot password?
              </a>
            </div>
            <button type="submit" className="btn btn-primary btn-lg w-100 mb-4">
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
