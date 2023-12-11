import { createContext, useState } from "react";

export const initialContext = {
  isLogined: false,
  updateLogin: () => {},
};

export const GlobalContext = createContext(initialContext);

export function ContextWrapper(props) {
  const [isLogined, login] = useState(initialContext.isLogined);

  function updateLogin() {
    login(!isLogined);
  }

  const value = {
    isLogined,
    updateLogin,
  };

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
}
