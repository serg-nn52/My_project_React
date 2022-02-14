import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPages from "../MainPages/MainPages";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import Error404 from "../Error404/Error404";
import "../../assets/style/style.scss";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

const App = () => {
  return (
    <div className="App">
      <Router basename="/My_project_React">
        <Routes>
          <Route path="/" element={<PageWrapper />}>
            <Route path="/" element={<MainPages />} />
            <Route path="/:id" element={<MainPages />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
