import React from "react";

export const Header = () => (
  <nav class="navbar has-background-primary-05 pl-6">
    <div class="navbar-brand pl-6">
      <h1 class="title mt-4 mb-5 has-text-primary-45 pl-6">
        Vesmírně dobré copy
      </h1>
    </div>
    <div
      class="navbar-menu m-4 pr-6 is-active has-background-primary-05"
      id="nav-links"
    >
      <div class="navbar-end">
        <a
          href="https://www.linkedin.com/in/dominika-jandorov%C3%A1-465a87220/"
          class="navbar-item has-text-primary-45"
          smooth={true}
          duration={1000}
        >
          LinkedIn
        </a>

        <a
          href="https://medium.seznam.cz/autor/dominika-jandorova-2471"
          class="navbar-item has-text-primary-45"
          smooth={true}
          duration={1000}
        >
          Blog
        </a>
      </div>
    </div>
  </nav>
);
