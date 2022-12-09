import "./App.css";
import { HashRouter, Routes, Route, Link } from "react-router-dom"
import Login from "./pages/Login"
import ResetPassword from "./pages/ResetPassword"
import SignUp from "./pages/SignUp"
import { StytchHeadlessClient } from "@stytch/vanilla-js/headless"
import { StytchProvider } from "@stytch/react";
import HomeVideo from './assets/homevideo.mp4';

function App() {

  const stytchClient = new StytchHeadlessClient(
    "public-token-test-f5486417-a4f0-48f3-b369-3f8a35995913"
  );

  return (
    <div className="App">
      <div className='overlay'></div>
      <video autoPlay loop muted className='video'>
        <source src={HomeVideo} type='video/mp4' />
      </video>
      <HashRouter>
        <StytchProvider stytch={stytchClient}>
          <Login />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/resetpassword/*" element={<ResetPassword />} />
          </Routes>
        </StytchProvider>
      </HashRouter>
    </div>
  )
};

export default App


{/* <Link to="/signup">SignUp</Link>
        <Link to="/login">Login</Link> */}
