import { html, component } from "haunted";
import { submitForm } from "../functions/functions.js";

export function LookupItem() {
  return html`
    <form
      @submit=${(e) => {
        submitForm(
          e,
          "https://www.nannosfoods.codes/itemModifyJSONResponseCollin.php"
        )
          .then((res) => res.json())
          .then((resp) => "" + JSON.stringify(resp) + "")
          .then((resp) => JSON.parse(resp))
          .then((obj) => {
            if (obj.hasOwnProperty("Description")){
              sessionStorage.items = JSON.stringify(obj);
              //alert(JSON.stringify(obj))
              window.location.assign("/modifyItem");
            } else {
              //Reset all input element's values.
              e.target.reset();
              alert("No Item was found.");
            }
          })
          .catch((error) => alert(error));
      }}
    >
      <div className="container">
        <label htmlFor="ItemId">
          <b>Item ID</b>
        </label>
        <input
          type="text"
          placeholder="Enter Item ID"
          maxlength="9"
          pattern="[0-9]{1,9}"
          name="ItemId"
          required
        /><br />
        <button type="submit">Lookup Item</button>
      </div>
    </form>
  `;
}

customElements.define(
  "lookup-item",
  component(LookupItem, { useShadowDOM: false })
);