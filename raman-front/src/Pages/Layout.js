import * as React from "react";
import {useRef} from "react";
import "../Styles/hamburgers.css" 
import { Outlet, Link } from "react-router-dom";

function Layout() {
  const menuList = useRef(null);

  const toggleSideMenu = (e)=>{
    e.currentTarget.classList.toggle("is-active");
    menuList.current.classList.toggle("is-hidden");
  }

  return (
    <div id="page-container">
      <nav>
        <ul id="menu-list" ref={menuList} className="is-hidden">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/concerts">CONCERTS</Link>
          </li>
          <li>
            <Link to="/news">NEWS</Link>
          </li>
          <li>
            <Link to="/gallery">GALLERY</Link>
          </li>
          <li>
            <Link to="/bio">BIO</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>

        <span id="social">
          <a href="https://wa.me/41782363632">
            <img src="/img/social/whatsapp.webp" alt=""></img>
          </a>
          <a href="https://www.facebook.com/ramankamisarau/">
            <img src="/img/social/facebook.webp" alt=""></img>
          </a>
          <a href="https://www.youtube.com/channel/UC6jt6uzB2x0KPzbLaVVceOw">
            <img src="/img/social/youtube.webp" alt=""></img>
          </a>
        </span>

        <button id="hamburger" class="hamburger hamburger--squeeze" onClick={(e)=>toggleSideMenu(e)} type="button">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>© 2023 by Raman Kamisarau</footer>
    </div>
  );
}

export default Layout;
