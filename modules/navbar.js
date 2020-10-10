import { html } from "https://unpkg.com/lit-html/lit-html.js";
import { component, useState } from "https://unpkg.com/haunted/haunted.js";


export function Navbar() {
  return html`
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light navbar navbar-expand navbar-light"
    >
      <span class="navbar-brand"><a href="/">Nanno's Foods</a></span
      ><button
        type="button"
        aria-label="Toggle navigation"
        class="navbar-toggler collapsed"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse">
        <ul class="mr-auto navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/">Nanno's Representative Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/vendorLogin">Vendor Login</a>
          </li>
          <li class="nav-item"><a class="nav-link" href="/">About Us</a></li>
        </ul>
        <span class="navbar-text">Bringing Food to You With Nanno's Foods</span>
      </div>
    </nav>
  `;
}
