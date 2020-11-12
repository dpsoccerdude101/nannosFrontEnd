import { useRoutes, useTitle, navigateTo, replaceTo } from "haunted-router";
import { html, component } from "haunted";
import "./libraries/bootstrap/css/bootstrap.min.css";
import "./libraries/jquery/jquery-3.5.1.min.js";
import "./libraries/bootstrap/js/bootstrap.min.js";
import "./modules/navbar";
import "./Jumbotron";
import "./components/*.js";
//just a comment

export function App() {
  const routeResult = useRoutes(
    {
      "/": () => html`<jumbo-tron></jumbo-tron>`,
      "/employeeLogin": () => html`<employee-login></employee-login>`,
      "/employeeMenu": () =>
        html`<representative-navbar></representative-navbar>`,
      "/registerVendor": () =>
        html`<representative-navbar></representative-navbar
          ><register-vendor></register-vendor>`,
      "/deleteVendor": () =>
        html`<representative-navbar></representative-navbar
          ><delete-vendor></delete-vendor>`,
      "/AddStore": () =>
        html`<representative-navbar></representative-navbar
          ><add-store></add-store>`,
      "/deleteStore": () =>
        html`<representative-navbar></representative-navbar
          ><delete-store></delete-store>`,
      "/AddItem": () =>
        html`<representative-navbar></representative-navbar
          ><add-item></add-item>`,
      "/deleteItem": () =>
        html`<representative-navbar></representative-navbar
          ><delete-item></delete-item>`,
      "/AddMember": () =>
        html`<representative-navbar></representative-navbar
          ><add-member></add-member>`,
      "/deleteMember": () =>
        html`<representative-navbar></representative-navbar
          ><delete-member></delete-member>`,
      "/lookupVendor": () =>
        html`<representative-navbar></representative-navbar
          ><lookup-vendor></lookup-vendor>`,
      "/modifyVendor": () =>
        html`<representative-navbar></representative-navbar
          ><modify-vendor></modify-vendor>`,
      "/lookupItem": () =>
        html`<representative-navbar></representative-navbar
          ><lookup-item></lookup-item>`,
      "/modifyItem": () =>
        html`<representative-navbar></representative-navbar
          ><modify-item></modify-item>`,
      "/lookupStore": () =>
        html`<representative-navbar></representative-navbar
          ><lookup-store></lookup-store>`,
      "/modifyStore": () =>
        html`<representative-navbar></representative-navbar
          ><modify-store></modify-store>`,
    },
    ""
  );

  return html`
    <nav-bar></nav-bar>
    ${routeResult}
  `;
}
customElements.define("my-app", component(App, { useShadowDOM: false }));
