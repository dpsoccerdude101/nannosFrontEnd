import {
  useRoutes,
  useTitle,
  navigateTo,
  replaceTo,
  useSearchParams,
} from "haunted-router";
import "popper.js";
import { html, component, useState, useEffect } from "haunted";
import { nothing } from "lit-html";
import "jquery";
import "regenerator-runtime/runtime.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { mainRoutes, employeeLoggedInRoutes } from "./router.js";
import RepresentativeNavbar from "./components/common/representativeNavbar.js";
import "./components/common/*.js";
import { checkLogin, errorPage } from "./functions/functions.js";

export function App() {
  const [loggedIn, setLoggedIn] = useState(checkLogin());
  useEffect(() => setLoggedIn(checkLogin()), [
    sessionStorage.userCredentials,
  ]);
  const routeResult = loggedIn
    ? useRoutes(employeeLoggedInRoutes, errorPage)
    : useRoutes(mainRoutes, errorPage);
  return html`
    <nav-bar></nav-bar>
    ${loggedIn ? RepresentativeNavbar() : nothing} ${routeResult}
  `;
}
customElements.define("my-app", component(App, { useShadowDOM: false }));
