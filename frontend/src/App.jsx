import React from "react";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { Join } from "./pages/Join";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Games } from "./pages/Games.jsx";
import { Profile } from "./pages/Profile.jsx";

function App() {
  return (
    <div className="bg-black relative w-full h-screen">

      {/* Main Content */}
      <div className="relative z-10">
        <RecoilRoot>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Join />} />
              <Route path="/dashboard/games" element={<Games />} />
              <Route path="/dashboard/profile" element={<Profile   />} />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      </div>
    </div>
  );
}

export default App;
