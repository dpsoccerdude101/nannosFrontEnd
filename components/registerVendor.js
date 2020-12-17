import { html, component } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm, setPhoneValidity } from "../functions/functions.js";

export function RegisterVendor() {
  useTitle("Add Member");
  return html`
    <form
      @submit=${(e) => {
        e.preventDefault();
        if (
          document.getElementById("Password").value !=
          document.getElementById("Confirm_Password").value
        ) {
          alert("Error: Passwords Do not match.");
        } else {
          submitForm(
            e,
            "https://www.nannosfoods.codes/registerVendorJSONResponseMike.php"
          )
            .then((res) => res.json())
            .then((res) => JSON.parse(res))
            .then((obj) => {
              if (obj.result == "success") {
                console.dir(obj);
                navigateTo("/");
              } else {
                //Reset all input element's values.
                e.target.reset();
                alert("Insert Failed.");
              }
            })
            .catch((error) => alert(error));
        }
      }}
    >
      <div class="form-container" className="container">
        <div class="form-row">
          <div class="label-and-input">
            <label htmlFor="VendorCode"> Vendor Code </label>
            <input
              class="code"
              type="text"
              placeholder="Enter Vendor Code"
              pattern="[0-9]{1,9}"
              title="Please Enter a Numeric Vendor Code"
              name="VendorCode"
              required
            />
          </div>
          <div class="label-and-input">
            <label htmlFor="VendorName"> Vendor Name </label>
            <input
              class="name"
              type="text"
              placeholder="Vendor Name"
              pattern="[a-z A-Z0-9]{1,20}"
              maxlength="20"
              title="Please only use characters a-z A-Z 0-9 and ' '"
              name="VendorName"
              required
            />
          </div>
        </div>
        <div class="form-row">
          <div class="label-and-input">
            <label htmlFor="Address"> Address </label>
            <input
              type="address"
              type="text"
              placeholder="Address"
              pattern="[a-z A-Z,0-9]{1,50}"
              title="Please Only Use Characters a-z A-Z 0-9 , and ' '"
              maxlength="50"
              name="Address"
              required
            />
          </div>
        </div>
        <div class="form-row">
          <div class="label-and-input">
            <label htmlFor="City"> City </label>
            <input
              type="city"
              type="text"
              placeholder="City"
              pattern="[a-z A-Z]{1,20}"
              title="Please Use Alphabetic Characters Only"
              maxlength="20"
              name="City"
              required
            />
          </div>
          <div class="label-and-input">
            <label htmlFor="State"> State </label>
            <input
              class="state"
              type="text"
              placeholder="State"
              pattern="[a-zA-Z]{2}"
              title="Please Enter State as a two character state code EX: New York => 'NY'"
              maxlength="2"
              name="State"
              required
            />
          </div>
          <div class="label-and-input">
            <label htmlFor="Zip"> Zip </label>
            <input
              class="zip"
              type="text"
              placeholder="Zip Code"
              pattern="[0-9]{5}"
              title="Please enter numeric 5 digit zip codes only"
              maxlength="5"
              name="Zip"
              required
            />
          </div>
        </div>
        <div class="form-row">
          <div class="label-and-input">
            <label htmlFor="Phone"> Phone </label>
            <input
              class="phone"
              type="text"
              placeholder="Phone Number"
              maxlength="10"
              name="Phone"
              required
              @blur="${(e) => setPhoneValidity(e)}"
            />
          </div>
          <div class="label-and-input">
            <label htmlFor="ContactName"> Contact Name </label>
            <input
              class="contact-name"
              type="text"
              placeholder="Contact Name"
              pattern="[a-z A-Z]{1,20}"
              title="Please Use Alphabetic Characters Only"
              maxlength="20"
              name="ContactName"
              required
            />
          </div>
        </div>
        <div class="form-row">
          <div class="label-and-input">
            <label htmlFor="Password"> Password </label>
            <input
              class="password"
              type="Password"
              placeholder="Password"
              maxlength="20"
              id="Password"
              name="Password"
              required
            />
          </div>
        </div>
        <div class="form-row">
          <div class="label-and-input">
            <label htmlFor="ConfirmPassword"> Confirm Password </label>
            <input
              class="password"
              type="Password"
              placeholder="Confirm Password"
              maxlength="20"
              id="Confirm_Password"
              name="Confirm_Password"
              required
            />
          </div>
        </div>
        <div class="form-row">
          <button type="submit">Register Vendor</button>
        </div>
      </div>
    </form>
  `;
}
customElements.define(
  "register-vendor",
  component(RegisterVendor, { useShadowDOM: false })
);
