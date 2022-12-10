import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom"
import ResetPassword from "./pages/ResetPassword"
import SignUp from "./pages/SignUp"
import { StytchHeadlessClient } from "@stytch/vanilla-js/headless"
import { StytchProvider } from "@stytch/react";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import ForgotPass from "./pages/forgotPass";


function App() {

  const stytchClient = new StytchHeadlessClient(
    "public-token-test-f5486417-a4f0-48f3-b369-3f8a35995913"
  );

  return (
    <HashRouter>
      <StytchProvider stytch={stytchClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPass />} />
          <Route path="/resetpassword/*" element={<ResetPassword />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </StytchProvider>
    </HashRouter>
  )
};

export default App


{/* <Link to="/signup">SignUp</Link>
        <Link to="/login">Login</Link> */}
