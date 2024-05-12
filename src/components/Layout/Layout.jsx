import React from "react";
import Header from "../Header";
import "./layout.css";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
    </>
  );
}

export default Layout;
