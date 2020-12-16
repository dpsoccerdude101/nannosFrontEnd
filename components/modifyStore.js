import { html, component } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm } from "../functions/functions.js";
import { States } from "./virtual/States";

export function ModifyStore() {
  useTitle("Modify Store");
  return html`
    <form
      @submit=${(e) => {
        e.preventDefault();
        submitForm(
          e,
          "https://www.nannosfoods.codes/storeUpdateJSONResponseCollin.php"
        )
          .then((res) => res.json())
          .then((res) => JSON.parse(res))
          .then((obj) => {
            if (obj.result == "success") {
              console.dir(obj);
              sessionStorage.removeItem("stores");
              navigateTo("/");
            } else {
              //Reset all input element's values.
              alert("Update Failed.");
            }
          })
          .catch((error) => alert(error));
      }}
    >
      <div class="form-container" className="container">
        <div class="form-row">
          <div class="label-and-input">
            <label htmlFor="StoreId">
                Store ID
            </label>
            <input class="code"
              type="text"
              name="StoreId"
              value="${JSON.parse(sessionStorage.stores).StoreId}"
              required
              readonly />
          </div>
          <div class="label-and-input">
            <label htmlFor="StoreName">
              Store Name
            </label>
            <input class="name"
              type="text"
              placeholder="Store Name"
              pattern="[a-z A-Z]{1,20}"
              maxlength="20"
              name="StoreName"
              required
              value="${JSON.parse(sessionStorage.stores).StoreName}" />
          </div>
        </div>
        <div class="form-row">
          <div class="label-and-input">
            <label htmlFor="Address">
              Address
            </label>
            <input class="address"
              type="text"
              placeholder="Address"
              maxlength="30"
              name="Address"
              required
              value="${JSON.parse(sessionStorage.stores).Address}" />
          </div>
        </div>
        <div class="form-row">
          <div class="label-and-input">
            <label htmlFor="City">
              City
            </label>
            <input class="city"
              type="text"
              placeholder="City"
              pattern="[a-z A-Z]{1,20}"
              maxlength="20"
              name="City"
              required
              value="${JSON.parse(sessionStorage.stores).City}" />
          </div>
          <div class="label-and-input">
            <label htmlFor="State">
              State
            </label>
            <select class="state" name="State" 
            selected="${JSON.parse(sessionStorage.stores).State}"
            required>
              ${States()}
            </select>
          </div>
          <div class="label-and-input">
            <label htmlFor="ZIP">
              Zip
            </label>
            <input class="zip"
              type="text"
              placeholder="Zip Code"
              pattern="[0-9]{5}"
              maxlength="5"
              name="ZIP"
              required
              value="${JSON.parse(sessionStorage.stores).ZIP}" />
          </div>
        </div>
        <div class="form-row">
          <div class="label-and-input">
            <label htmlFor="Phone">
              Phone
            </label>
            <input class="phone"
              type="text"
              placeholder="Phone Number"
              pattern="[0-9]{10}"
              maxlength="10"
              name="Phone"
              required
              value="${JSON.parse(sessionStorage.stores).Phone}" />
          </div>
          <div class="label-and-input">
            <label htmlFor="ContactName">
              Manager Name
            </label>
            <input class="contact-name"
              type="text"
              placeholder="Manager Name"
              pattern="[a-z A-Z]{1,20}"
              maxlength="20"
              name="ManagerName"
              required
              value="${JSON.parse(sessionStorage.stores).ManagerName}" />
            </label>
          </div>
        </div>
        <div class="form-row">
        <button type="submit">Modify Store</button>
        </div>
      </div>
    </form>
  `;
}
customElements.define(
  "modify-store",
  component(ModifyStore, { useShadowDOM: false })
);
