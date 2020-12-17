import { html, component } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm, isEmailValid, isPhoneNumberValid } from "../functions/functions.js";
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
      <div className="container"><br />
        <label htmlFor="CustomerId">
            <b>Customer Id</b>
        </label>
        <input
          type="text"
          name="CustomerId"
          value="${JSON.parse(sessionStorage.cust).CustomerId}"
          required
          readonly
        /><br />
        <label htmlFor="Name">
          <b>Customer Name</b>
        </label>
        <input
          type="text"
          placeholder="Name"
          pattern="[a-z A-Z]{1,20}"
          maxlength="20"
          name="Name"
          required
          value="${JSON.parse(sessionStorage.cust).Name}"
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
          value="${JSON.parse(sessionStorage.cust).Address}"
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
          value="${JSON.parse(sessionStorage.cust).City}"
        /><br />
        <label htmlFor="State">
          <b>State</b>
        </label>
        <select name="State" 
        selected="${JSON.parse(sessionStorage.cust).State}"
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
          value="${JSON.parse(sessionStorage.cust).Zip}"
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
          value="${JSON.parse(sessionStorage.cust).Phone}"
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
        /><br />
        <label htmlFor="Email">
          <b>Customer Email</b>
        </label>
        <input
          type="text"
          placeholder="Customer Email"
          pattern="[a-zA-Z0-9@.]{1,20}"
          maxlength="20"
          name="Email"
          required
          value="${JSON.parse(sessionStorage.cust).Email}"
          @blur="${(e) => {
                console.dir(e);
                if (e.target.value.length > 0) {
                  if (!isEmailValid(e.target.value))
                    e.target.setCustomValidity(
                      e.target.value +
                        " is not valid. Try entering a different email address"
                    );
                  else e.target.setCustomValidity("");
                } else e.target.setCustomValidity("");
              }}"
        /><br />
        
        </label>
        <button type="submit">Modify Member</button>
      </div>
    </form>
  `;
}
customElements.define(
  "modify-member",
  component(ModifyMember, { useShadowDOM: false })
);