import { html } from "https://unpkg.com/lit-html/lit-html.js";
import { component } from "https://unpkg.com/haunted/haunted.js";
import { submitForm } from "/functions/functions.js";

export function LookupVendor() {
  return html`
    <form
      @submit=${(e) => {
        submitForm(
          e,
          "https://www.nannosfoods.codes/venModifyJSONResponseCollin.php"
        )
          .then((res) => res.json())
          .then((res) => JSON.parse(res))
          .then((obj) => {
            if (obj.result == "success") {
              //console.dir(obj);
              alert(JSON.stringify(obj))
              //window.location.assign("/pages/modifyVendor/result.html");
            } else {
              //Reset all input element's values.
              e.target.reset();
              alert("No vendor was found.");
            }
          })
          .catch((error) => alert(error));
      }}
    >
      <div className="container">
        <label htmlFor="VendorID">
          <b>Vendor ID</b>
        </label>
        <input
          type="text"
          placeholder="Enter Vendor ID"
          maxlength="9"
          pattern="[0-9]{1,9}"
          name="VendorID"
          required
        /><br />
        <button type="submit">Lookup Vendor</button>
      </div>
    </form>
  `;
}

customElements.define(
  "lookup-vendor",
  component(LookupVendor, { useShadowDOM: false })
);
