import React from "react";
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import Signin from "./Screen/signin";
import Profilepage from "./Screen/profilepage";
import Studentexam from "./Screen/studentexam";
import Teacherexam from "./Screen/teacherexam";

function App() {
  return (
    <BRouter>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route exact path="/profile" element={<Profilepage />} />
        <Route exact path="/studentexam" element={<Studentexam />} />
        <Route exact path="/teacherexam" element={<Teacherexam />} />

        
      </Routes>
    </BRouter>
  );
}

export default App;
