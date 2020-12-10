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
import { mainRoutes, loggedInRoutes } from "./router.js";
import "./components/common/navbar.js";
import "./components/FourZeroFour.js";
import "./components/common/representativeNavbar.js";

export function App() {
  const loggedIn = sessionStorage.userCredentials;
  const errorPage = html`<four-zero-four></four-zero-four>`;
  const routeResult = loggedIn
    ? useRoutes(loggedInRoutes, errorPage)
    : useRoutes(mainRoutes, errorPage);
  const subNavbar = loggedIn
    ? html`<representative-navbar></representative-navbar>`
    : html``;
  return html`
    <nav-bar></nav-bar>
    ${subNavbar} ${routeResult}
  `;
}
customElements.define("my-app", component(App, { useShadowDOM: false }));
