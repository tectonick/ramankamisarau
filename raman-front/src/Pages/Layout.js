import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Navbar from "../Components/Navbar";
import Api from "../Utility/api";


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


      <footer>
        {Layout?.Footer}
        <a className="me" target="_blank" href="https://nickkiselev.me/" rel="noreferrer">
          <img width="100px" src="/img/nick-logo-white.png" alt="" />
        </a>
      </footer>
    </div>
  );
}

export default Layout;
