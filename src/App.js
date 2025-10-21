import React from "react";
import SignUpForm from "./SignUpForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogInForm from "./LogInForm";
import Dashboard from "./Dashboard"; 

function App() {

  return (
     <Router>
    
     
          
      <Routes>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
   
      
     </Router>
  );
}

export default App;
