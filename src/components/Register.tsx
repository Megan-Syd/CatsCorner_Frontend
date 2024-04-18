import React from 'react';
import { OAuthButtonGroup } from './OAuthButtonGroup';
import { RegisterPassword } from './RegisterPassword';
import { Link } from 'react-router-dom';

export const Register = () => (
  <div className="container-lg py-4">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="text-center">
          <h2 className="mt-4 mb-3">Create an account</h2>
          <p className="mb-4">Already have an account? <Link to="/login" className="text-decoration-none">Log in</Link></p>
        </div>
        <div className="p-4 bg-light rounded shadow-sm">
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <RegisterPassword id="password" name="password" autoComplete="new-password" required />
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

export default Register;
);

export default Register;
