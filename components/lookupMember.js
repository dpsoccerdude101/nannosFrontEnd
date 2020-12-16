import { html, component } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm } from "../functions/functions.js";

export function LookupMember() {
  useTitle("Lookup Member");
  return html`
    <form
      @submit=${(e) => {
        submitForm(
          e,
          "https://www.nannosfoods.codes/modifyMemberJSONResponseAdam.php"
        )
          .then((res) => res.json())
          .then((resp) => "" + JSON.stringify(resp) + "")
          .then((resp) => JSON.parse(resp))
          .then((obj) => {
            if (obj.hasOwnProperty("Name")){
              sessionStorage.cust = JSON.stringify(obj);
              //alert(JSON.stringify(obj))
              navigateTo("/modifyMember");
            } else {
              //Reset all input element's values.
              alert("No Store was found.");
            }
          })
          .catch((error) => alert(error));
      }}
    >
      <div className="container">
        <label htmlFor="CustomerId">
          <b>Member Id</b>
        </label>
        <input
          type="text"
          placeholder="Enter Member Id"
          maxlength="9"
          pattern="[0-9]{1,9}"
          name="CustomerId"
          required
        /><br />
        <button type="submit">Lookup Member</button>
      </div>
    </form>
  `;
}

customElements.define(
  "lookup-member",
  component(LookupMember, { useShadowDOM: false })
);