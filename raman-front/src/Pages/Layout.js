import * as React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar"

function Layout() {
  return (
    <div id="page-container">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <footer>© 2023 by Raman Kamisarau</footer>
    </div>
  );
}

export default Layout;
