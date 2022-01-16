import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type PageWrapperType = {
  children: React.ReactNode;
};

const PageWrapper: React.FC<PageWrapperType> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />

      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default PageWrapper;
