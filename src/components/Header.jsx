import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <nav className="container d-flex py-2 bg-body-tertiary">
        <div className="me-auto d-flex">
          <Link to="/" className="nav-link px-2">
            Home
          </Link>
        </div>
        <div className="d-flex">
          <Link to="/login" className="nav-link px-2">
            Login
          </Link>
          <Link to="/" className="nav-link px-2">
            Sign Up
          </Link>
        </div>
      </nav>
    </>
  );
}
