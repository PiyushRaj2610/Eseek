import React from "react";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { Join } from "./pages/Join";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-black">
      <RecoilRoot>
        <BrowserRouter>
          <Routes>

            <Route path ="/" element={<Home/>} />
            <Route path ="/signin" element={<SignUp/>} />
            <Route path ="/login" element={<Join/>} />

          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
