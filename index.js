import { useRoutes, useTitle, navigateTo, replaceTo } from "haunted-router";
import { html, component } from "haunted";
import "./libraries/bootstrap/css/bootstrap.min.css";
import "./libraries/jquery/jquery-3.5.1.min.js";
import "./libraries/bootstrap/js/bootstrap.min.js";
import "./modules/navbar";
import "./Jumbotron";
import "./components/*.js";

export function App() {
  const routeResult = useRoutes(
    {
      "/": () => html`<jumbo-tron></jumbo-tron>`,
      "/employeeLogin": () => html`<employee-login></employee-login>`,
      "/employeeMenu": () =>
        html`<representative-navbar></representative-navbar>`,
      "/registerVendor": () => html`<register-vendor></register-vendor>`,
      "/deleteVendor": () => html`<delete-vendor></delete-vendor>`,
      "/AddStore": () => html`<add-store></add-store>`,
      "/deleteStore": () => html`<delete-store></delete-store>`,
      "/AddItem": () => html`<add-item></add-item>`,
      "/deleteItem": () => html`<delete-item></delete-item>`,
      "/AddMember": () => html`<add-member></add-member>`,
      "/deleteMember": () => html`<delete-member></delete-member>`,
    },
    ""
  );

  return html`
    <nav-bar></nav-bar>
    ${routeResult}
  `;
}
customElements.define("my-app", component(App, { useShadowDOM: false }));
