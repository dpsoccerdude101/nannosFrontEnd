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
          "https://www.nannosfoods.codes/LookupAllItemsThresholdSteveJSONResponse.php"
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
              alert("No Item was found.");
            }
          })
          .catch((error) => alert(error));
      }}
    >
      <div className="container">
        <button type="submit">Lookup All Items Below Threshold</button>
      </div>
    </form>
  `;
}

customElements.define(
  "lookup-all-items-threshold",
  component(LookupAllItemsThreshold, { useShadowDOM: false })
);