import { html, component } from "haunted";
import { submitForm } from "../functions/functions.js";

export function RegisterVendor() {

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
                window.location.assign("/employeeMenu");
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
      <div className="container">
        <label htmlFor="VendorCode">
          <b>Vendor Code</b>
        </label>
        <input
          type="text"
          placeholder="Enter Vendor Code"
          pattern="[0-9]{1,9}"
          title="Please Enter a Numeric Vendor Code"
          name="VendorCode"
          required
        /><br />
        <label htmlFor="VendorName">
          <b>Vendor Name</b>
        </label>
        <input
          type="text"
          placeholder="Vendor Name"
          pattern="[a-z A-Z0-9]{1,20}"
          maxlength="20"
          title="Please only use characters a-z A-Z 0-9 and ' '"
          name="VendorName"
          required
        /><br />
        <label htmlFor="Address">
          <b>Address</b>
        </label>
        <input
          type="text"
          placeholder="Address"
          pattern="[a-z A-Z,0-9]{1,50}"
          title="Please Only Use Characters a-z A-Z 0-9 , and ' '"
          maxlength="50"
          name="Address"
          required
        /><br />
        <label htmlFor="City">
          <b>City</b>
        </label>
        <input
          type="text"
          placeholder="City"
          pattern="[a-z A-Z]{1,20}"
          title="Please Use Alphabetic Characters Only"
          maxlength="20"
          name="City"
          required
        /><br />
        <label htmlFor="State">
          <b>State</b>
        </label>
        <input
          type="text"
          placeholder="State"
          pattern="[a-zA-Z]{2}"
          title="Please Enter State as a two character state code EX: New York => 'NY'"
          maxlength="2"
          name="State"
          required
        /><br />
        <label htmlFor="Zip">
          <b>Zip</b>
        </label>
        <input
          type="text"
          placeholder="Zip Code"
          pattern="[0-9]{5}"
          title="Please enter numeric 5 digit zip codes only"
          maxlength="5"
          name="Zip"
          required
        /><br />
        <label htmlFor="Phone">
          <b>Phone</b>
        </label>
        <input
          type="text"
          placeholder="Phone Number"
          pattern="[0-9]{10}"
          title="Please enter phone numbers in format ########## (No dashes)"
          maxlength="10"
          name="Phone"
          required
        /><br />
        <label htmlFor="ContactName">
          <b>Contact Name</b>
        </label>
        <input
          type="text"
          placeholder="Contact Name"
          pattern="[a-z A-Z]{1,20}"
          title="Please Use Alphabetic Characters Only"
          maxlength="20"
          name="ContactName"
          required
        /><br />
        <label htmlFor="Password">
          <b>Password</b>
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
  "register-vendor",
  component(RegisterVendor, { useShadowDOM: false })
);
