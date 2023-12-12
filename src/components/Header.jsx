import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export function Header() {
  const { isLogined, user, updateLogin, updateUser } =
    useContext(GlobalContext);

  function logOut() {
    updateUser("");
    updateLogin();
  }

  if (isLogined)
    return (
      <>
        <nav className="container d-flex py-2 bg-body-tertiary">
          <div className="me-auto d-flex">
            <Link to="/some_login" className="nav-link px-2">
              Home
            </Link>
          </div>
          <div className="d-flex">
            <div onClick={logOut} role="button">
              LogOut
            </div>
            <Link to="/" className="nav-link px-2">
              {user}
            </Link>
          </div>
        </nav>
      </>
    );
  else
    return (
      <>
        <nav className="container d-flex py-2 bg-body-tertiary">
          <div className="me-auto d-flex">
            <Link to="/some_login" className="nav-link px-2">
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
