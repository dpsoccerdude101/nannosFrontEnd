import { html } from "https://unpkg.com/lit-html/lit-html.js";
import { component } from "https://unpkg.com/haunted/haunted.js";
import { submitForm } from "/functions/functions.js";

export function ModifyStore() {
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
              window.location.assign("/pages/employeeMenu/");
            } else {
              //Reset all input element's values.
              alert("Update Failed.");
            }
          })
          .catch((error) => alert(error));
      }}
    >
      <div className="container"><br />
        <label htmlFor="StoreId">
            <b>Store ID</b>
        </label>
        <input
          type="text"
          name="StoreId"
          value="${JSON.parse(sessionStorage.stores).StoreId}"
          required
          readonly
        /></br>
        <label htmlFor="StoreName">
          <b>Store Name</b>
        </label>
        <input
          type="text"
          placeholder="Store Name"
          pattern="[a-z A-Z]{1,20}"
          maxlength="20"
          name="StoreName"
          required
          value="${JSON.parse(sessionStorage.stores).StoreName}"
        /><br />
        <label htmlFor="Address">
          <b>Address</b>
        </label>
        <input
          type="text"
          placeholder="Address"
          maxlength="30"
          name="Address"
          required
          value="${JSON.parse(sessionStorage.stores).Address}"
        /><br />
        <label htmlFor="City">
          <b>City</b>
        </label>
        <input
          type="text"
          placeholder="City"
          pattern="[a-z A-Z]{1,20}"
          maxlength="20"
          name="City"
          required
          value="${JSON.parse(sessionStorage.stores).City}"
        /><br />
        <label htmlFor="State">
          <b>State</b>
        </label>
        <input
          type="text"
          placeholder="State"
          pattern="[a-zA-Z]{2}"
          maxlength="2"
          name="State"
          required
          value="${JSON.parse(sessionStorage.stores).State}"
        /><br />
        <label htmlFor="ZIP">
          <b>Zip</b>
        </label>
        <input
          type="text"
          placeholder="Zip Code"
          pattern="[0-9]{5}"
          maxlength="5"
          name="ZIP"
          required
          value="${JSON.parse(sessionStorage.stores).ZIP}"
        /><br />
        <label htmlFor="Phone">
          <b>Phone</b>
        </label>
        <input
          type="text"
          placeholder="Phone Number"
          pattern="[0-9]{10}"
          maxlength="10"
          name="Phone"
          required
          value="${JSON.parse(sessionStorage.stores).Phone}"
        /><br />
        <label htmlFor="ContactName">
          <b>Manager Name</b>
        </label>
        <input
          type="text"
          placeholder="Manager Name"
          pattern="[a-z A-Z]{1,20}"
          maxlength="20"
          name="ManagerName"
          required
          value="${JSON.parse(sessionStorage.stores).ManagerName}"
        /><br />
        
        </label>
        <button type="submit">Modify Store</button>
      </div>
    </form>
  `;
}
customElements.define(
  "modify-store",
  component(ModifyStore, { useShadowDOM: false })
);
