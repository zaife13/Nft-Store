import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import SignUp from "./Screens/SignUp";
import WalletConnect from "./Screens/WalletConnect";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/connectwallet" element={<WalletConnect/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
