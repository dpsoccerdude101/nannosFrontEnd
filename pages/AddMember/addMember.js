import { html } from "https://unpkg.com/lit-html/lit-html.js";
import { component } from "https://unpkg.com/haunted/haunted.js";
const submitForm = require("/functions/bundle.js").submitForm;
const isPhoneNumberValid = require("/functions/bundle.js").isPhoneNumberValid;
import { submitForm, isPhoneNumberValid } from "/functions/functions.js";
import { States } from "/modules/States.js";

export function AddMember() {
  return html`
    <form
      @submit=${(e) => {
        submitForm(
          e,
          "https://www.nannosfoods.codes/AddMemberJSONResponseMike.php"
        )
          .then((res) => res.json())
          .then((res) => JSON.parse(res))
          .then((obj) => {
            if (obj.result == "success") {
              window.location.assign("/pages/employeeMenu/");
            } else {
              //Reset all input element's values.
              e.target.reset();
              alert("Failed to Add");
            }
          })
          .catch((error) => alert(error));
      }}
    >
      <div className="container">
        <label htmlFor="Name">
          <b>Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Full Name Here"
          name="Name"
          pattern="[a-z A-Z]{1,50}"
          maxlength="50"
          required
        />
        <br />
        <label htmlFor="Address">
          <b>Address</b>
        </label>
        <input
          type="text"
          placeholder="Enter Street Address"
          name="Address"
          pattern="[a-z A-Z,0-9]{1,50}"
          title="Please Only Use Characters a-z A-Z 0-9 , and ' '"
          maxlength="50"
          required
        />
        <br />
        <label htmlFor="City">
          <b>City</b>
        </label>
        <input
          type="text"
          placeholder="Enter City"
          name="City"
          maxlength="25"
          required
        />
        <br />

        <label htmlFor="State">
          <b>State</b>
        </label>
        <select name="State" required>
          ${States()}
        </select>
        <br />

        <label htmlFor="Zip">
          <b>Zip</b>
        </label>
        <input
          type="text"
          placeholder="Enter Zip Code"
          name="Zip"
          pattern="[0-9]{5}"
          title="Please Enter a Numeric 5 Digit Zip Code."
          maxlength="5"
          required
        />
        <br />

        <label htmlFor="Phone">
          <b>Phone</b>
        </label>
        <input
          type="text"
          placeholder="Enter Phone Number"
          name="Phone"
          required
          onblur="${(e) => {
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
        <br />

        <label htmlFor="Email">
          <b>E-mail</b>
        </label>
        <input
          type="email"
          placeholder="Enter email"
          name="Email"
          maxlength="50"
          required
        />
        <br />
        <button type="submit">Add Member</button>
      </div>
    </form>
  `;
}
customElements.define(
  "add-member",
  component(AddMember, { useShadowDOM: false })
);
