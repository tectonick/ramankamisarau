import * as React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <ul>
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

        <div>
            <a href="https://wa.me/41782363632"><img src="/img/social/whatsapp.webp" alt=""></img></a>
            <a href="https://www.facebook.com/ramankamisarau/"><img src="/img/social/facebook.webp" alt=""></img></a>
            <a href="https://www.youtube.com/channel/UC6jt6uzB2x0KPzbLaVVceOw"><img src="/img/social/youtube.webp" alt=""></img></a>
        </div>
      </nav>

      <hr />

      <Outlet />

      <footer>
        © 2023 by Raman Kamisarau
      </footer>
    </div>
  );
}

export default Layout;
