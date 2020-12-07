import "./components/*.js";
import { html } from "haunted";
const mainRoutes = {
  "/": () => html`<jumbo-tron></jumbo-tron>`,
  "/employeeLogin": () => html`<employee-login></employee-login>`,
  "/vendorLogin": () => html`<vendor-login></vendor-login>`,
};
const loggedInRoutes = {
  "/": () => html`<jumbo-tron></jumbo-tron>`,
  "/employeeLogin": () => html`<employee-logged-in></employee-logged-in>`,
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
  "/lookUpAllItems": () => html`<lookup-all-items></lookup-all-items>`,
  "/viewAllItems": () => html`<view-all-items></view-all-items>`,
};

const vendorLoggedInRoutes = {
  "/": () => html`<jumbo-tron></jumbo-tron>`,
  "/vendorLogin": () => html`<vendor-logged-in></vendor-logged-in>`,
};
export { mainRoutes, loggedInRoutes, vendorLoggedInRoutes };
