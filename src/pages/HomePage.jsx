import style from "./HomePage.module.css";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export function HomePage() {
  const { isLogined } = useContext(GlobalContext);

  const text = !isLogined ? "Please sign in!" : "You're welcome";

  return (
    <>
      <p className={style.text}>{text}MEH MEH</p>
    </>
  );
}
