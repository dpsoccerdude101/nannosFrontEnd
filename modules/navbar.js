import { html } from "https://unpkg.com/lit-html/lit-html.js";
import { component } from "https://unpkg.com/haunted/haunted.js";

export function Navbar() {
  return html`
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
            <a class="nav-link" href="/employeeLogin"
              >Nanno's Representative Login
              <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="http://nannosfoodsdev.bitnamiapp.com//vendorLogin.php"
              >Vendor Login</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">About Us</a>
          </li>
        </ul>
        <span class="navbar-text">
          Bringing Food to You With Nanno's Foods
        </span>
      </div>
    </nav>
    <!-- End Nav Bar -->
  `;
}
customElements.define("nav-bar", component(Navbar, { useShadowDOM: false }));
