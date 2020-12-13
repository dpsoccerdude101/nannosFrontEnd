import { html, component } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm } from "../functions/functions.js";

export function LookupAllItemsThreshold() {
  useTitle("Lookup All Items Below Threshold");
  return html`
    <form
      @submit=${(e) => {
        submitForm(
          e,
          "https://www.nannosfoods.codes/LookUpAllItemsThresholdSteveJSONResponse.php"
        )
          .then((res) => res.json())
          .then((resp) => "" + JSON.stringify(resp) + "")
          .then((resp) => JSON.parse(resp))
          .then((obj) => {
            if (obj){
                var count = 0;
                console.log(obj);
                sessionStorage.items = JSON.stringify(obj);
                console.dir(sessionStorage.items);
              //alert(JSON.stringify(obj))
              navigateTo("/viewAllItemsThreshold");
            } else {
              //Reset all input element's values.
              e.target.reset();
              alert("No Items were found within that threshold.");
            }
          })
          .catch((error) => alert(error));
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
    </form>
  `;
}

customElements.define(
  "lookup-all-items-threshold",
  component(LookupAllItemsThreshold, { useShadowDOM: false })
);