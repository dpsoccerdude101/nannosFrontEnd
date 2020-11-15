import { html } from "https://unpkg.com/lit-html/lit-html.js";
import { component } from "https://unpkg.com/haunted/haunted.js";

export function Navbar() {
  return html`
    <nav id="overboot" class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Nanno's Foods</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon">
          <!-- Put something here -->
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/pages/employeeLogin"
              >Nanno's Representative Login
              <span class="sr-only">(current)</span></a
            >
          </li>
      </div>
    </nav>
    <!-- End Nav Bar -->
  `;
}
customElements.define("nav-bar", component(Navbar, { useShadowDOM: false }));
