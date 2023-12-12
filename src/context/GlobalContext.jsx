import { createContext, useState } from "react";

export const initialContext = {
  isLogined: false,
  updateLogin: () => {},
  user: "",
  updateUser: () => {},
};

export const GlobalContext = createContext(initialContext);

export function ContextWrapper(props) {
  const [isLogined, login] = useState(initialContext.isLogined);
  const [user, name] = useState(initialContext.user);

  function updateLogin() {
    login(!isLogined);
  }
  function updateUser(value) {
    name(value);
  }

  const value = {
    isLogined,
    updateLogin,
    user,
    updateUser,
  };

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
}
