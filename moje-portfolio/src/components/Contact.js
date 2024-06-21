export const Contact = () => (
  <div id="contact" class="pl-6 pr-4 pb-5 pt-6">
    <h1>Kontaktujte mě</h1>
    <p>Napište mi a vydejde se společně za vesmírně dobrým obsahem.</p>
    <div className="contact-content">
      <p class="has-text-primary-45 is-size-5">
        {" "}
        E-mail: dominikajandorova@seznam.cz
      </p>
      <p>
        {" "}
        <a
          href="https://www.linkedin.com/in/dominika-jandorov%C3%A1-465a87220/"
          class="has-text-primary-45"
          smooth={true}
          duration={1000}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </div>
  </div>
);
