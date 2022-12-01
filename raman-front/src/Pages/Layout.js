import * as React from "react";
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Api from "../Utility/api";
import Navbar from "../Components/Navbar";
import { SwitchTransition, CSSTransition } from "react-transition-group";

function Layout() {
  const location = useLocation();
  const [Layout, setLayout] = useState({});

  useEffect(() => {
    Api.getLayout().then((data) => {
      setLayout(data);
    });
  }, []);

  return (
    <div id="page-container">
      <Navbar layout={Layout}/>

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

      <footer>{Layout?.Footer}</footer>
    </div>
  );
}

export default Layout;
