import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Login } from "./pages/Login";
// import { NoPage } from "./pages/NoPage";
import { PublicLayout } from "./layout/PublicLayout";
// import { UsersLayout } from "./layout/UsersLayout";
import "./App.css";
import { ContextWrapper } from "./context/GlobalContext";

function App() {
  return (
    <ContextWrapper>
      <BrowserRouter>
        <Routes>
          <Route Component={PublicLayout}>
            <Route index path="/some_login" element={<HomePage />} />
            {/* <Route Component={AccountLayout}> */}
            {/* <Route path="/account/"{user} element={<UserPage account={user} />} /> */}
            {/* </Route> */}
          </Route>
          {/* <Route Component={UsersLayout}></Route> */}
          <Route path="/login" element={<Login />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </ContextWrapper>
  );
}

export default App;
