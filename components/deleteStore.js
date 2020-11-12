import { html, component } from "haunted";
import { submitForm } from "../functions/functions.js";

export function DeleteStore() {
  return html`
    <form
      @submit=${(e) => {
        submitForm(
          e,
          "https://www.nannosfoods.codes/deleteStoreJSONResponseMike.php"
        )
          .then((res) => res.json())
          .then((res) => JSON.parse(res))
          .then((obj) => {
            if (obj.result == "success") {
              console.dir(obj);
              window.location.assign("/employeeMenu");
            } else {
              //Reset all input element's values.
              e.target.reset();
              alert("Deletion Failed.");
            }
          })
          .catch((error) => alert(error));
      }}
    >
      <div className="container">
        <label htmlFor="StoreID">
          <b>Store ID</b>
        </label>
        <input
          type="text"
          placeholder="Enter Store ID"
          maxlength="9"
          pattern="[0-9]{1,9}"
          title="Please Enter a numeric ID"
          name="StoreID"
          required
        /><br />
        <button type="submit">Delete Store</button>
      </div>
    </form>
  `;
}
customElements.define(
  "delete-store",
  component(DeleteStore, { useShadowDOM: false })
);
