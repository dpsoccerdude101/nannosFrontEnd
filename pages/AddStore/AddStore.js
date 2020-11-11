import { html } from "https://unpkg.com/lit-html/lit-html.js";
import { component } from "https://unpkg.com/haunted/haunted.js";
import { submitForm } from "/functions/functions.js";

export function AddStore() {
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
              window.location.assign("/pages/employeeMenu/");
            } else {
              //Reset all input element's values.
              e.target.reset();
              alert("Insert Failed.");
            }
          })
          .catch((error) => alert(error));
      }}
    >
      <div className="container">
        <label htmlFor="StoreCode">
          <b>Store Code</b>
        </label>
        <input
          type="text"
          placeholder="Enter Store Code"
          pattern="[0-9]{1,9}"
          title="Please Enter a Numeric Store Code"
          name="StoreCode"
          required
        /><br />
        <label htmlFor="StoreName">
          <b>Store Name</b>
        </label>
        <input
          type="text"
          placeholder="Store Name"
          pattern="[a-z A-Z0-9]{1,20}"
          title="Please Only use characters a-z A-Z 0-9 and ' '"
          maxlength="20"
          name="StoreName"
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
          maxlength="20"
          title="Please only use Alphabetic Characters"
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
        <label htmlFor="ManagerName">
          <b>Manager Name</b>
        </label>
        <input
          type="text"
          placeholder="Manager Name"
          pattern="[a-z A-Z]{1,20}"
          title="Please use alphabetic characters only"
          maxlength="20"
          name="ManagerName"
          required
        /><br />
        <button type="submit">Add Store</button>
      </div>
    </form>
  `;
}
customElements.define(
  "add-store",
  component(AddStore, { useShadowDOM: false })
);
