import { html, component } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import {
  submitForm,
  setPhoneValidity,
  setEmailValidity,
} from "../functions/functions.js";
import { States } from "./virtual/States";

export function AddMember() {
  useTitle("Add Member");
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
              navigateTo("/");
            } else {
              //Reset all input element's values.
              e.target.reset();
              alert("Failed to Add");
            }
          })
          .catch((error) => alert(error));
      }}
    >
      <div class="form-container" className="container">
        <div class="form-row">
          <div class="label-and-input">
            <label htmlFor="Name"> Name </label>
            <input
              class="name"
              type="text"
              placeholder="Enter Full Name Here"
              name="Name"
              pattern="[a-z A-Z]{1,50}"
              maxlength="50"
              required
            />
          </div>
        </div>
        <div class="form-row">
          <div class="label-and-input">
            <label htmlFor="Address"> Address </label>
            <input
              class="address"
              type="text"
              placeholder="Enter Street Address"
              name="Address"
              pattern="[a-z A-Z,0-9]{1,50}"
              title="Please Only Use Characters a-z A-Z 0-9 , and ' '"
              maxlength="50"
              required
            />
          </div>
        </div>
        <div class="form-row">
          <div class="label-and-input">
            <label htmlFor="City"> City </label>
            <input
              class="city"
              type="text"
              placeholder="Enter City"
              name="City"
              maxlength="25"
              required
            />
          </div>
          <div class="label-and-input">
            <label htmlFor="State"> State </label>
            <select class="state" name="State" required>
              ${States()}
            </select>
          </div>
          <div class="label-and-input">
            <label htmlFor="Zip"> Zip </label>
            <input
              class="zip"
              type="text"
              placeholder="Enter Zip Code"
              name="Zip"
              pattern="[0-9]{5}"
              title="Please Enter a Numeric 5 Digit Zip Code."
              maxlength="5"
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
              placeholder="Enter Phone Number"
              name="Phone"
              required
              @blur="${(e) => setPhoneValidity(e)}"
            />
          </div>
          <div class="label-and-input">
            <label htmlFor="Email"> E-mail </label>
            <input
              type="email"
              placeholder="Enter email"
              name="Email"
              maxlength="50"
              required
              @blur="${(e) => setEmailValidity(e)}"
            />
          </div>
        </div>
        <div class="form-row">
          <button type="submit">Add Member</button>
        </div>
      </div>
    </form>
  `;
}
customElements.define(
  "add-member",
  component(AddMember, { useShadowDOM: false })
);
