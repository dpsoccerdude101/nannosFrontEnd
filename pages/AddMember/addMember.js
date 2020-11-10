import { html } from "https://unpkg.com/lit-html/lit-html.js";
import { component } from "https://unpkg.com/haunted/haunted.js";
import { submitForm } from "/functions/functions.js";

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
          maxlength="50"
          required
        />
        <br />
        <label htmlFor="Address">
          <b>Address</b>
        </label>
        <input type="text" 
        placeholder="Enter Street Address" 
        name="Address"
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
        <input
          type="text"
          placeholder="Enter State"
          name="State"
          maxlength="15"
          required
        />
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
          maxlength="10"
          pattern="[0-9]{10}"
          title="Please Enter a Numeric 10 Digit Phone Number In the Format ########## (No dashes)."
          required
        />
        <br />

        <label htmlFor="Email">
          <b>E-mail</b>
        </label>
        <input
          type="email"
          placeholder="Enter email"
          name="Email"
          required
        />
        <br />
        <button type="submit">Add Member</button>
      </div>
    </form>
  `;
}
customElements.define("add-member", component(AddMember, { useShadowDOM: false }));