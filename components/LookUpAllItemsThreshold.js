import { html, component, useEffect, useState } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm } from "../functions/functions.js";

export function LookupAllItemsThreshold() {
  useEffect(() => useTitle("Lookup All Items Below Threshold"), []);
  return html`<form
    @submit=${async (e) => {
      const response = await submitForm(
        e,
        "https://www.nannosfoods.codes/LookUpAllItemsThresholdSteveJSONResponse.php"
      );
      if (response.ok) {
        const responseJSON = await response.json();
        const items = JSON.parse("" + JSON.stringify(responseJSON) + "");
        if (items) {
          navigateTo("/viewAllItemsThreshold", items);
        } else {
          //Reset all input element's values.
          e.target.reset();
          alert("No Items were found within that threshold.");
        }
      } else alert("Error Code: " + response.status);
    }}
  >
    <div className="container">
      <label htmlFor="QuantityInStock">
        <b>Threshold for Items</b>
      </label>
      <input
        type="number"
        placeholder="Enter Item Threshold"
        minlength="1"
        maxlength="1000"
        name="QuantityInStock"
        required
      /><br />
      <button type="submit">Lookup Items</button>
    </div>
  </form> `;
}

customElements.define(
  "lookup-all-items-threshold",
  component(LookupAllItemsThreshold, { useShadowDOM: false })
);
