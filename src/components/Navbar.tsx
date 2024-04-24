import Logo from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          <img
            src={Logo}
            alt="logo"
            style={{ marginRight: "10px" }}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Cats Corner
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/home">
                Home
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/programms">
                Programms
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link" href="/register">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login <FontAwesomeIcon icon={faSignIn} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}