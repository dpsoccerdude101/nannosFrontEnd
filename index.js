import {
  useRoutes,
  useTitle,
  navigateTo,
  replaceTo,
  useSearchParams,
} from "haunted-router";
import { html, component, useState } from "haunted";
import { nothing } from "lit-html";
import "jquery";
import "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./modules/*.js";
import "./components/*.js";

export function App() {
  const routeResult = useRoutes(
    {
      "/": () => {
        useTitle("Home");
        return html`<jumbo-tron></jumbo-tron>`;
      },
      "/employeeLogin": () => html`<employee-login></employee-login>`,
      "/employeeMenu": () => {
        useTitle("Employee Menu");
        return html``;
      },
      "/registerVendor": () => html`<register-vendor></register-vendor>`,
      "/deleteVendor": () => html`<delete-vendor></delete-vendor>`,
      "/AddStore": () => html`<add-store></add-store>`,
      "/deleteStore": () => html`<delete-store></delete-store>`,
      "/AddItem": () => html`<add-item></add-item>`,
      "/deleteItem": () => html`<delete-item></delete-item>`,
      "/AddMember": () => html`<add-member></add-member>`,
      "/deleteMember": () => html`<delete-member></delete-member>`,
      "/lookupVendor": () => html`<lookup-vendor></lookup-vendor>`,
      "/modifyVendor": () => html`<modify-vendor></modify-vendor>`,
      "/lookupItem": () => html`<lookup-item></lookup-item>`,
      "/modifyItem": () => html`<modify-item></modify-item>`,
      "/lookupStore": () => html`<lookup-store></lookup-store>`,
      "/modifyStore": () => html`<modify-store></modify-store>`,
    },
    ""
  );

  return html`
    <nav-bar></nav-bar>
    <representative-navbar></representative-navbar>
    ${routeResult}
  `;
}
customElements.define("my-app", component(App, { useShadowDOM: false }));
