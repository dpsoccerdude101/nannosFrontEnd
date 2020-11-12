import { html, component } from "haunted";
import { submitForm } from "../functions/functions.js";
import { States } from "../modules/States.js";

export function ModifyVendor() {
  return html`
    <form
      @submit=${(e) => {
        e.preventDefault();
        if (
          document.getElementById("Password").value !=
          document.getElementById("Confirm_Password").value
        ) {
          alert("Error: Passwords Do not match.");
        } else if (
          document.getElementById("Password").value !=
          JSON.parse(sessionStorage.vendors).Password
        ) {
          alert("Error: This is not the vendors Password.");
        } else {
          submitForm(
            e,
            "https://www.nannosfoods.codes/venUpdateJSONResponseCollin.php"
          )
            .then((res) => res.json())
            .then((res) => JSON.parse(res))
            .then((obj) => {
              if (obj.result == "success") {
                console.dir(obj);
                sessionStorage.removeItem("vendors");
                window.location.assign("/employeeMenu");
              } else {
                //Reset all input element's values.
                alert("Update Failed.");
              }
            })
            .catch((error) => alert(error));
        }
      }}
    >
      <div className="container"><br />
        <label htmlFor="VendorID">
            <b>Vendor ID</b>
        </label>
        <input
          type="text"
          name="VendorID"
          value="${JSON.parse(sessionStorage.vendors).VendorID}"
          required
          readonly
        /></br>
        <label htmlFor="VendorName">
          <b>Vendor Name</b>
        </label>
        <input
          type="text"
          placeholder="Vendor Name"
          pattern="[a-z A-Z]{1,20}"
          maxlength="20"
          name="VendorName"
          required
          value="${JSON.parse(sessionStorage.vendors).VendorName}"
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
          value="${JSON.parse(sessionStorage.vendors).Address}"
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
          value="${JSON.parse(sessionStorage.vendors).City}"
        /><br />
        <label htmlFor="State">
          <b>State</b>
        </label>
        <select name="State" 
        selected="${JSON.parse(sessionStorage.stores).State}"
        required>
          ${States()}
        </select><br />
        <label htmlFor="Zip">
          <b>Zip</b>
        </label>
        <input
          type="text"
          placeholder="Zip Code"
          pattern="[0-9]{5}"
          maxlength="5"
          name="Zip"
          required
          value="${JSON.parse(sessionStorage.vendors).ZIP}"
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
          value="${JSON.parse(sessionStorage.vendors).Phone}"
        /><br />
        <label htmlFor="ContactName">
          <b>Contact Name</b>
        </label>
        <input
          type="text"
          placeholder="Contact Name"
          pattern="[a-z A-Z]{1,20}"
          maxlength="20"
          name="ContactName"
          required
          value="${JSON.parse(sessionStorage.vendors).ContactPersonName}"
        /><br />
        <label htmlFor="Password">
          <b>Vendor Password</b>
        </label>
        <input
          type="Password"
          placeholder="Password"
          maxlength="20"
          id="Password"
          name="Password"
          required
        /><br />
        <label htmlFor="ConfirmPassword">
          <b>Confirm Password</b>
        </label>
        <input
          type="Password"
          placeholder="Confirm Password"
          maxlength="20"
          id="Confirm_Password"
          name="Confirm_Password"
          required
        /><br />
        <button type="submit">Register Vendor</button>
      </div>
    </form>
  `;
}
customElements.define(
  "modify-vendor",
  component(ModifyVendor, { useShadowDOM: false })
);
