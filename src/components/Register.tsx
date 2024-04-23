import React, { useState, ChangeEvent, FormEvent }from 'react';
import { OAuthButtonGroup } from './OAuthButtonGroup';
import { RegisterPassword } from './RegisterPassword';
import { Link } from 'react-router-dom';

export const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
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
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Registration failed');
      }
      window.location.href = '/login';
    } catch (error: any) {
      console.error('Error during registration:', error.message);
    }
  };

  return (
    <div className="container-lg py-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center">
            <h2 className="mt-4 mb-3">Create an account</h2>
            <p className="mb-4">Already have an account? <Link to="/login" className="text-decoration-none">Log in</Link></p>
          </div>
          <div className="p-4 bg-light rounded shadow-sm">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <RegisterPassword id="password" name="password" value={formData.password} onChange={handleChange} autoComplete="new-password" required />
              </div>
              <div className="mb-3 form-check d-flex justify-content-between">
                <div>
                  <input type="checkbox" className="form-check-input" id="termsAgreement" required />
                  <label className="form-check-label" htmlFor="termsAgreement">I agree to the <a href="#" className="text-decoration-none">terms and conditions</a></label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-lg w-100 mb-4">Sign up</button>
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

export default Register;

