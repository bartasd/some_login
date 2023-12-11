import { useContext, useEffect, useState } from "react";
import style from "./Login.module.css";
import logo from "../img/bootstrap-logo.svg";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [logins, setLogins] = useState([]);
  useEffect(() => {
    fetch("https://bartasd.github.io/some_login/data/users.json")
      .then((res) => res.json())
      .then((data) => setLogins(data));
  }, []);

  const navigate = useNavigate();
  const redirectToUser = (user) => {
    setTimeout(() => {
      navigate("/some_login");
    }, 1000);
  };

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [welcome, setWelcome] = useState("Please sign in!");

  function handleUser(event) {
    setUser(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  const { isLogined, updateLogin } = useContext(GlobalContext);

  function handleSubmit(event) {
    event.preventDefault();
    let welcomeText = "";
    if (logins.length === 0)
      alert("There is no username database. Please try again later.");
    else {
      if (user in logins && password === logins[user]) {
        updateLogin();
        welcomeText = `Welcome, ${user}. You've successfully logged in!`;
      } else {
        welcomeText = `Wrong username and/or password. Please try again.`;
      }
    }
    setWelcome(welcomeText);
  }

  useEffect(() => {
    if (isLogined) {
      redirectToUser(user);
    }
  }, [isLogined]);

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <img
        className={style.logo}
        src={logo}
        alt="usersLogo"
        width="72"
        height="57"
      />
      <h1 className={style.welcome + " h3 mb-3 fw-normal"}>{welcome}</h1>

      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="username"
          onChange={handleUser}
        />
        <label for="floatingInput">User Name</label>
      </div>

      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="password"
          onChange={handlePassword}
        />
        <label for="floatingPassword">Password</label>
      </div>
      <button className="btn btn-primary w-50 py-2" type="submit">
        Sign in
      </button>
    </form>
  );
}
