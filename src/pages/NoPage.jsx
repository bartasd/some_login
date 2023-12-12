import style from "./NoPage.module.css";

export function NoPage() {
  return (
    <>
      <div className={style.cnt}>
        <h1 className={style.error}>404</h1>
      </div>
    </>
  );
}
