import { html, component } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm } from "../functions/functions.js";

export function LookupAllItems() {
  useTitle("Lookup All Items");
  return html`
    <form
      @submit=${(e) => {
        submitForm(
          e,
          "https://www.nannosfoods.codes/LookupAllItemsMikeJSONResponse.php"
        )
          .then((res) => res.json())
          .then((resp) => "" + JSON.stringify(resp) + "")
          .then((resp) => JSON.parse(resp))
          .then((obj) => {
            if (obj){
                console.log(obj);
                sessionStorage.items = JSON.stringify(obj);
                console.dir(sessionStorage.items);
              //alert(JSON.stringify(obj))
              navigateTo("/viewAllItems");
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
        <button type="submit">Lookup All Items</button>
      </div>
    </form>
  `;
}

customElements.define(
  "lookup-all-items",
  component(LookupAllItems, { useShadowDOM: false })
);