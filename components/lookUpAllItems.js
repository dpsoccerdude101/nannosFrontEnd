import { html, component } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm } from "../functions/functions.js";

export function LookupAllItems() {
  useTitle("Lookup All Items");
  return html`
    <form
      @submit=${async (e) => {
        const response = await submitForm(
          e,
          "https://www.nannosfoods.codes/LookupAllItemsMikeJSONResponse.php"
        );
        if (response.ok) {
          const responseJSON = await response.json();
          const items = JSON.parse("" + JSON.stringify(responseJSON) + "");
          if (items) {
            navigateTo("/viewAllItems", items);
          } else {
            //Reset all input element's values.
            e.target.reset();
            alert("No Item was found.");
          }
        } else alert("Error Code: " + response.status);
      }}
    >
      <div className="container">
        <button type="submit">Lookup All Items</button>
      </div>
    </form>
  `;
}

customElements.define(
  "lookup-all-items",
  component(LookupAllItems, { useShadowDOM: false })
);
