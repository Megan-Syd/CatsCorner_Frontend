import { OAuthButtonGroup } from "./OAuthButtonGroup";
import { PasswordField } from "./PasswordField";
import { Link } from "react-router-dom";

export const Login = () => (
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
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" />
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

export default Login;
