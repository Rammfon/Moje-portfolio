import React from "react";

export const Header = () => (
  <nav class="navbar has-background-primary-05 pl-6">
    <div class="navbar-brand pl-6">
      <a class="navbar-item pl-6" className="clickable">
        <h1 class="title mt-4 mb-4 has-text-primary-45 pl-6">
          V(n)esmírně dobré copy
        </h1>
      </a>
    </div>
    <div
      class="navbar-menu m-4 pr-6 is-active has-background-primary-05"
      id="nav-links"
    >
      <div class="navbar-end">
        <div style={{ cursor: "none" }}>
          <a
            href="#about"
            class="navbar-item has-text-primary-45"
            smooth={true}
            duration={1000}
          >
            O mně
          </a>
        </div>
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
