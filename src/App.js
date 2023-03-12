import React from "react";
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import Signin from "./Screen/signin";
import Profilepage from "./Screen/profilepage";

function App() {
  return (
    <BRouter>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route exact path="/profile" element={<Profilepage />} />


      </Routes>
    </BRouter>
  );
}

export default App;
