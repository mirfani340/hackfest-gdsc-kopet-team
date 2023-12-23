import Header from "@/components/Header";
import Footer from "@/components/Footer";

import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{ children }</main>
      <Footer />
    </>
  );
};

export default MainLayout;