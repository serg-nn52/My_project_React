import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPages from "../../containers/MainPages";
import RegistrationPage from "../../containers/RegistrationPage";
import Error404 from "../../containers/Error404";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPages />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
