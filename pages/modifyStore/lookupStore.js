import { html } from "https://unpkg.com/lit-html/lit-html.js";
import { component } from "https://unpkg.com/haunted/haunted.js";
import { submitForm } from "/functions/functions.js";

export function LookupStore() {
  return html`
    <form
      @submit=${(e) => {
        submitForm(
          e,
          "https://www.nannosfoods.codes/storeModifyJSONResponseCollin.php"
        )
          .then((res) => res.json())
          .then((resp) => "" + JSON.stringify(resp) + "")
          .then((resp) => JSON.parse(resp))
          .then((obj) => {
            if (obj.hasOwnProperty("StoreName")){
              sessionStorage.stores = JSON.stringify(obj);
              //alert(JSON.stringify(obj))
              window.location.assign("/pages/modifyStore/result.html");
            } else {
              //Reset all input element's values.
              e.target.reset();
              alert("No Store was found.");
            }
          })
          .catch((error) => alert(error));
      }}
    >
      <div className="container">
        <label htmlFor="StoreId">
          <b>Store ID</b>
        </label>
        <input
          type="text"
          placeholder="Enter Store ID"
          maxlength="9"
          pattern="[0-9]{1,9}"
          name="StoreId"
          required
        /><br />
        <button type="submit">Lookup Store</button>
      </div>
    </form>
  `;
}

customElements.define(
  "lookup-store",
  component(LookupStore, { useShadowDOM: false })
);