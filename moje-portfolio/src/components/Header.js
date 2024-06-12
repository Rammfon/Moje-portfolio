import React from "react";

export const Header = () => (
  <nav class="navbar has-background-primary-05 ">
    <div class="navbar-brand">
      <a class="navbar-item">
        <h1 class="title m-4 has-text-primary-45">My Website</h1>
      </a>
      <a className="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
    <div class="navbar-menu m-4 pr-6">
      <div class="navbar-end ">
        <a
          href="#about"
          class="navbar-item has-text-primary-45"
          smooth={true}
          duration={1000}
        >
          O mně
        </a>

        <a
          href="#skills"
          class="navbar-item has-text-primary-45"
          smooth={true}
          duration={1000}
        >
          Moje dovednosti
        </a>

        <a
          href="#edex"
          class="navbar-item has-text-primary-45"
          smooth={true}
          duration={1000}
        >
          Vzdělání a praxe
        </a>

        <a
          href="#references"
          class="navbar-item has-text-primary-45"
          smooth={true}
          duration={1000}
        >
          Reference
        </a>
      </div>
    </div>
  </nav>
);
