import React from "react";
import NavBar from "./../components/navBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <main className="container">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default RootLayout;
