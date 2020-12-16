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
import {
  mainRoutes,
  employeeLoggedInRoutes,
  vendorLoggedInRoutes,
} from "./router.js";
import RepresentativeNavbar from "./components/common/representativeNavbar.js";
import "./components/common/*.js";
import {
  checkLogin,
  errorPage,
  checkVendorLogin,
} from "./functions/functions.js";

export function App() {
  /**
   * State
   */
  const [employeeLoggedIn, setEmployeeLoggedIn] = useState(checkLogin());
  const [vendorLoggedIn, setVendorLoggedIn] = useState(checkVendorLogin());
  const [routeResult, setRouteResult] = useState(
    useRoutes(mainRoutes, errorPage)
  );

  /**
   * Side-Effect Code check is Employee is Logged In or Vendor
   * is logged in or neither
   */
  useEffect(() => setEmployeeLoggedIn(checkLogin()), [
    sessionStorage.userCredentials,
  ]);
  useEffect(() => setEmployeeLoggedIn(checkLogin()), [
    sessionStorage.vendorCredentials,
  ]);

  /**
   * Side-Effect Code Assigns New Route based on changed 
   * Employee/Vendor Login State
   */
  useEffect(() => {
    if (employeeLoggedIn)
      setRouteResult(useRoutes(employeeLoggedInRoutes, errorPage));
    else if (vendorLoggedIn)
      setRouteResult(useRoutes(vendorLoggedInRoutes, errorPage));
    else setRouteResult(useRoutes(mainRoutes, errorPage));
  }, [employeeLoggedIn, vendorLoggedIn]);

  /**
   * Declared Routes for Router.js
   */
  return html`
    <nav-bar></nav-bar>
    ${employeeLoggedIn ? RepresentativeNavbar() : nothing} ${routeResult}
  `;
}
customElements.define("my-app", component(App, { useShadowDOM: false }));
