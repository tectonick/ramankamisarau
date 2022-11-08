import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../Styles/hamburgers.css";

function Navbar() {
  const menuList = useRef(null);
  const hamburger = useRef(null);

  const toggleSideMenu = (e) => {
    hamburger.current.classList.toggle("is-active");
    menuList.current.classList.toggle("is-hidden");
  };

  const hideSideMenu = (e) => {
    hamburger.current.classList.remove("is-active");
    menuList.current.classList.add("is-hidden");
  };

  return (
    <nav>
      <ul id="menu-list" ref={menuList} className="is-hidden">
        <li>
          <Link onClick={() => hideSideMenu()} to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link onClick={() => hideSideMenu()} to="/concerts">
            CONCERTS
          </Link>
        </li>
        <li>
          <Link onClick={() => hideSideMenu()} to="/news">
            NEWS
          </Link>
        </li>
        <li>
          <Link onClick={() => hideSideMenu()} to="/gallery">
            GALLERY
          </Link>
        </li>
        <li>
          <Link onClick={() => hideSideMenu()} to="/bio">
            BIO
          </Link>
        </li>
        <li>
          <Link onClick={() => hideSideMenu()} to="/contact">
            CONTACT
          </Link>
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

      <button
        id="hamburger"
        class="hamburger hamburger--squeeze"
        ref={hamburger}
        onClick={() => toggleSideMenu()}
        type="button"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </nav>
  );
}

export default Navbar;
