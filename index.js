import {
  useRoutes,
  useTitle,
  navigateTo,
  replaceTo,
  useSearchParams,
} from "haunted-router";
import { html, component, useState, useEffect } from "haunted";
import { nothing } from "lit-html";
import "jquery";
import "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { mainRoutes, loggedInRoutes, vendorLoggedInRoutes } from "./router.js";
import "./components/common/navbar.js";
import "./components/FourZeroFour.js";
import "./components/common/representativeNavbar.js";
import "./components/common/vendorNavbar.js";

export function App() {
  const routeResult = sessionStorage.userCredentials
    ? useRoutes(loggedInRoutes, html`<four-zero-four></four-zero-four>`)
    : sessionStorage.vendorCredentials
    ? useRoutes(vendorLoggedInRoutes, html`<four-zero-four></four-zero-four>`)
    : useRoutes(mainRoutes, html`<four-zero-four></four-zero-four>`);

  return html`
    <nav-bar></nav-bar>
    ${sessionStorage.userCredentials
      ? html`<representative-navbar></representative-navbar>`
      : sessionStorage.vendorCredentials
      ? html`<vendor-navbar></vendor-navbar>`
      : html``}
    ${routeResult}
  `;
}
customElements.define("my-app", component(App, { useShadowDOM: false }));
