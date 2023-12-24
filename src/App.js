import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import SignUp from "./Screens/SignUp";
import WalletConnect from "./Screens/WalletConnect";
import Marketplace from "./Screens/Marketplace";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/connectwallet" element={<WalletConnect />}></Route>
          <Route path="/marketplace" element={<Marketplace />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
