import { html, component } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm, isPhoneNumberValid } from "../functions/functions.js";
import { States } from "./virtual/States";

export function ModifyVendor() {
  useTitle("Modify Vendor");
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
                navigateTo("/");
              } else {
                //Reset all input element's values.
                alert("Update Failed.");
              }
            })
            .catch((error) => alert(error));
        }
      }}
    >
      <div class="form-container" className="container">
        <div class="form-row">
          <div class="label-and-input">
            <label htmlFor="VendorID">
                Vendor ID
            </label>
            <input class="code"
              type="text"
              name="VendorID"
              value="${JSON.parse(sessionStorage.vendors).VendorID}"
              required
              readonly/>
          </div>
          <div class="label-and-input">
            <label htmlFor="VendorName">
              Vendor Name
            </label>
            <input class="name"
              type="text"
              placeholder="Vendor Name"
              pattern="[a-z A-Z]{1,20}"
              maxlength="20"
              name="VendorName"
              required
              value="${JSON.parse(sessionStorage.vendors).VendorName}"/>
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
              value="${JSON.parse(sessionStorage.vendors).Address}"/>
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
              value="${JSON.parse(sessionStorage.vendors).City}"/>
          </div>
          <div class="label-and-input">
            <label htmlFor="State">
              State
            </label>
            <select class="state" name="State" 
            selected="${JSON.parse(sessionStorage.vendors).State}"
            required>
              ${States()}
            </select>
          </div>
          <div class="label-and-input">
            <label htmlFor="Zip">
              Zip
            </label>
            <input class="zip"
              type="text"
              placeholder="Zip Code"
              pattern="[0-9]{5}"
              maxlength="5"
              name="Zip"
              required
              value="${JSON.parse(sessionStorage.vendors).ZIP}"/>
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
                value="${JSON.parse(sessionStorage.vendors).Phone}"
                @blur="${(e) => {
                console.dir(e);
                if (e.target.value.length > 0) {
                  if (!isPhoneNumberValid(e.target.value))
                    e.target.setCustomValidity(
                      e.target.value +
                        " is not valid. Try entering a different phone number"
                    );
                  else e.target.setCustomValidity("");
                } else e.target.setCustomValidity("");
              }}"
              />
            </div>
            <div class="label-and-input">
              <label htmlFor="ContactName">
                Contact Name
              </label>
              <input class="contact-name"
                type="text"
                placeholder="Contact Name"
                pattern="[a-z A-Z]{1,20}"
                maxlength="20"
                name="ContactName"
                required
                value="${JSON.parse(sessionStorage.vendors).ContactPersonName}"/>
            </div>
          </div>
          <div class="form-row">
            <div class="label-and-input">
            <label htmlFor="Password">
              Vendor Password
            </label>
            <input class="password"
              type="Password"
              placeholder="Password"
              maxlength="20"
              id="Password"
              name="Password"
              required/>
            </div>
          </div>
          <div class="form-row">
            <div class="label-and-input">
              <label htmlFor="ConfirmPassword">
                Confirm Password
              </label>
              <input class="password"
                type="Password"
                placeholder="Confirm Password"
                maxlength="20"
                id="Confirm_Password"
                name="Confirm_Password"
                required />
            </div>
          </div>
        <div class="form-row">
          <button type="submit">Modify Vendor</button>
        </div>
      </div>
    </form>
  `;
}
customElements.define(
  "modify-vendor",
  component(ModifyVendor, { useShadowDOM: false })
);
