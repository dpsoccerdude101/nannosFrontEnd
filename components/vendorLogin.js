import { html, component, useEffect, useState } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import {
  submitForm,
  checkVendorLogin,
  vendorLogin,
} from "../functions/functions.js";

export function VendorLogin() {
  useEffect(
    () =>
      checkVendorLogin()
        ? useTitle("Vendor Logged In")
        : useTitle("Vendor Login"),
    [sessionStorage.vendorCredentials, []]
  );
  return html`${checkVendorLogin()
    ? html` <div>You are already logged in.</div> `
    : html`<form
        @submit=${async (e) => {
          const response = await submitForm(
            e,
            "https://www.nannosfoods.codes/vendorLoginJSONResponse.php"
          );
          if (response.ok) {
            const responseJSON = await response.json();
            const logindata = responseJSON;
            if (logindata) {
              console.log(logindata);


              navigateTo("/vendorDashboard", logindata);
            } else {
              //Reset all input element's values.
              e.target.reset();
              alert("No Item was found.");
            }
          } else alert("Error Code: " + response.status);
        }}
      >
        <div className="container">
          <label htmlFor="VendorCode">
            <b>Vendor Code</b>
          </label>
          <input
            type="text"
            placeholder="Enter Vendor Code"
            name="VendorCode"
            required
          />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <button type="submit">Login</button>
        </div>
      </form>`}`;
}
customElements.define(
  "vendor-login",
  component(VendorLogin, { useShadowDOM: false })
);
