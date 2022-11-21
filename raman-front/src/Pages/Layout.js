import * as React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { SwitchTransition, CSSTransition } from "react-transition-group";

function Layout() {
  const location = useLocation();

  return (
    <div id="page-container">
      <Navbar />

      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          timeout={100}
          classNames="page"
        >
          <main className="page">
            <Outlet />
          </main>
        </CSSTransition>
      </SwitchTransition>

      <footer>© 2023 by Raman Kamisarau</footer>
    </div>
  );
}

export default Layout;
