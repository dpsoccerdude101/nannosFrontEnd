import { html, component } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm } from "../functions/functions.js";

export function LookupItem() {
  useTitle("Lookup Item");
  return html`
    <form
      @submit=${async (e) => {
        const response = await submitForm(
          e,
          "https://www.nannosfoods.codes/itemModifyJSONResponseCollin.php"
        );
        if (response.ok) {
          const responseJSON = await response.json();
          const item = JSON.parse("" + JSON.stringify(responseJSON) + "");
          if (item.hasOwnProperty("Description")) {
            navigateTo("/modifyItem", item);
          } else {
            //Reset all input element's values.
            e.target.reset();
            alert("No Item was found.");
          }
        } else alert("Error Code: " + response.status);
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
