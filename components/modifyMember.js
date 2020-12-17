import { html, component } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm } from "../functions/functions.js";
import { States } from "./virtual/States";

export function ModifyMember() {
  useTitle("Modify Member");
  return html`
    <form
      @submit=${(e) => {
        e.preventDefault();
        submitForm(
          e,
          "https://www.nannosfoods.codes/updateMemberJSONResponseAdam.php"
        )
          .then((res) => res.json())
          .then((res) => JSON.parse(res))
          .then((obj) => {
            if (obj.result == "success") {
              console.dir(obj);
              sessionStorage.removeItem("cust");
              navigateTo("/");
            } else {
              //Reset all input element's values.
              alert("Update Failed.");
            }
          })
          .catch((error) => alert(error));
      }}
    >
      <div class="form-container" className="container"><br />
        <div class="form-row">
          <div class="label-and-input">
            <label htmlFor="CustomerId">
                Customer Id
            </label>
            <input
              type="text"
              name="CustomerId"
              value="${JSON.parse(sessionStorage.cust).CustomerId}"
              required
              readonly/>
          </div>
          <div class="label-and-input">
            <label htmlFor="Name">
              Name
            </label>
            <input
            type="text"
            placeholder="Name"
            pattern="[a-z A-Z]{1,20}"
            maxlength="20"
            name="Name"
            required
            value="${JSON.parse(sessionStorage.cust).Name}"/>
          </div>
        </div>

        <div class="form-row">
          <div class="label-and-input">
            <label htmlFor="Address">
              Address
            </label>
            <input
            type="text"
            placeholder="Address"
            maxlength="30"
            name="Address"
            required
            value="${JSON.parse(sessionStorage.cust).Address}"/>
          </div>
        </div>
        <div class="form-row">
          <div class="label-and-input">
            <label htmlFor="City">
              City
            </label>
            <input
            type="text"
            placeholder="City"
            pattern="[a-z A-Z]{1,20}"
            maxlength="20"
            name="City"
            required
            value="${JSON.parse(sessionStorage.cust).City}"/>
          </div>
          <div class="label-and-input">
            <label htmlFor="State">
              State
            </label>
            <select name="State" 
              selected="${JSON.parse(sessionStorage.cust).State}"
              required>
                ${States()}
           </select>
          </div>
          <div class="label-and-input">
            <label htmlFor="Zip">
              Zip
            </label>
            <input
            type="text"
            placeholder="Zip Code"
            pattern="[0-9]{5}"
            maxlength="5"
            name="Zip"
            required
            value="${JSON.parse(sessionStorage.cust).Zip}"/>
          </div>
        </div>
        <div class="form-row">
          <div class="label-and-input">
            <label htmlFor="Phone">
              Phone
            </label>
            <input
              type="text"
              placeholder="Phone Number"
              pattern="[0-9]{10}"
              maxlength="10"
              name="Phone"
              required
              value="${JSON.parse(sessionStorage.cust).Phone}"/>
          </div>
          <div class="label-and-input">
            <label htmlFor="Email">
              E-mail
            </label>
            <input
              type="text"
              placeholder="Customer Email"
              pattern="[a-zA-Z0-9@.]{1,20}"
              maxlength="20"
              name="Email"
              required
              value="${JSON.parse(sessionStorage.cust).Email}"/>
          </div>
        </div>
        <div class="form-row">       
          <button type="submit">Modify Member</button>
        </div>
      </div> 
    </form>
  `;
}
customElements.define(
  "modify-member",
  component(ModifyMember, { useShadowDOM: false })
);