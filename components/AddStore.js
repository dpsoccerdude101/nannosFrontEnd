import { html, component } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm } from "../functions/functions.js";
import { States } from "./virtual/States";

export function AddStore() {
  useTitle("Add Store");
  return html`
    <form
      @submit=${(e) => {
        submitForm(
          e,
          "https://www.nannosfoods.codes/addStoreJSONResponseMike.php"
        )
          .then((res) => res.json())
          .then((res) => JSON.parse(res))
          .then((obj) => {
            if (obj.result == "success") {
              console.dir(obj);
              navigateTo("/employeeMenu");
            } else {
              //Reset all input element's values.
              e.target.reset();
              alert("Insert Failed.");
            }
          })
          .catch((error) => alert(error));
      }}
    >
      <div class="form-container" className="container">
        <div class="form-row">
          <div class="label-and-input">
            <label htmlFor="StoreCode">
              Store Code
            </label>
            <input class="code"
              type="text"
              placeholder="Enter Store Code"
              pattern="[0-9]{1,9}"
              title="Please Enter a Numeric Store Code"
              name="StoreCode"
              required
            />
          </div>
          <div class="label-and-input">
            <label htmlFor="StoreName">
              Store Name
            </label>
            <input class="name"
              type="text"
              placeholder="Store Name"
              pattern="[a-z A-Z0-9]{1,20}"
              title="Please Only use characters a-z A-Z 0-9 and ' '"
              maxlength="20"
              name="StoreName"
              required />
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
              pattern="[a-z A-Z,0-9]{1,50}"
              title="Please Only Use Characters a-z A-Z 0-9 , and ' '"
              maxlength="50"
              name="Address"
              required />
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
              title="Please only use Alphabetic Characters"
              name="City"
              required />
          </div>
          <div class="label-and-input">
            <label htmlFor="State">
              State
            </label>
            <select class="state" name="State" required>
              ${States()}</select>
          </div>
          <div class="label-and-input">
            <label htmlFor="Zip">
              Zip
            </label>
            <input
              type="text"
              placeholder="Zip Code"
              pattern="[0-9]{5}"
              title="Please enter numeric 5 digit zip codes only"
              maxlength="5"
              name="Zip"
              required />
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
                title="Please enter phone numbers in format ########## (No dashes)"
                maxlength="10"
                name="Phone"
                required />
            </div>
            <div class="label-and-input">
              <label htmlFor="ManagerName">
                Manager Name
              </label>
              <input class="contact-name"
                type="text"
                placeholder="Manager Name"
                pattern="[a-z A-Z]{1,20}"
                title="Please use alphabetic characters only"
                maxlength="20"
                name="ManagerName"
                required />
            </div>
          </div>
        <div class="form-row">
          <button type="submit">Add Store</button>
        </div>
      </div>
    </form>
  `;
}
customElements.define(
  "add-store",
  component(AddStore, { useShadowDOM: false })
);
