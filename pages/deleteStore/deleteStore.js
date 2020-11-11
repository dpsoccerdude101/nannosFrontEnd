import { html } from "https://unpkg.com/lit-html/lit-html.js";
import { component } from "https://unpkg.com/haunted/haunted.js";
import { submitForm } from "/functions/functions.js";

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
              window.location.assign("/pages/employeeMenu/");
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
        <button type="submit">Delete Member</button>
      </div>
    </form>
  `;
}
customElements.define(
  "delete-store",
  component(DeleteStore, { useShadowDOM: false })
);
