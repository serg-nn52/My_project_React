import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import MainPages from "../MainPages/MainPages";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import Error404 from "../Error404/Error404";
import "../../assets/style/style.scss";
import PageWrapper from "../../components/Common/PageWrapper/PageWrapper";
import { getDarkTheme } from "../../store/darkTheme/selectors";
import BasketPage from "../BasketPage/BasketPage";
import OrderOkPage from "../OrderOkPage/OrderOkPage";

const App = () => {
  return (
    <div className="App" style={useSelector(getDarkTheme)}>
      <Router basename="/My_project_React">
        <Routes>
          <Route path="/" element={<PageWrapper />}>
            <Route path="/" element={<MainPages />} />
            <Route path="/:id" element={<MainPages />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/orderok" element={<OrderOkPage />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
