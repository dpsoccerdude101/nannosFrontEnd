import { html, component } from "haunted";
export function Navbar() {
  return html`
<<<<<<< HEAD:modules/navbar.js
    <nav id="overboot" class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Nanno's Foods</a>
=======
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a is="router-link" class="navbar-brand" href="/">Nanno's Foods</a>
>>>>>>> 4bb2510d9568fe4c53fa95aeaa378c9c2585202f:components/common/navbar.js
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
            <a is="router-link" class="nav-link" href="/employeeLogin"
              >Nanno's Representative Login
              <span class="sr-only">(current)</span></a
            >
          </li>
<<<<<<< HEAD:modules/navbar.js
=======
          <li class="nav-item">
            <a is="router-link" class="nav-link" href="/">Vendor Login</a>
          </li>
          <li class="nav-item">
            <a is="router-link" class="nav-link" href="/">About Us</a>
          </li>
          <li class="nav-item">
            <a
              is="router-link"
              class="nav-link"
              href="/"
              @click="${() => sessionStorage.removeItem("userCredentials")}"
              >Logout</a
            >
          </li>
        </ul>
        <span class="navbar-text">
          Bringing Food to You With Nanno's Foods
        </span>
>>>>>>> 4bb2510d9568fe4c53fa95aeaa378c9c2585202f:components/common/navbar.js
      </div>
    </nav>
    <!-- End Nav Bar -->
  `;
}
customElements.define("nav-bar", component(Navbar, { useShadowDOM: false }));
