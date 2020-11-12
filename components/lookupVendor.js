import { html, component } from "haunted";
import { submitForm } from "../functions/functions.js";

export function LookupVendor() {
  return html`
    <form
      @submit=${(e) => {
        submitForm(
          e,
          "https://www.nannosfoods.codes/venModifyJSONResponseCollin.php"
        )
          .then((res) => res.json())
          .then((resp) => "" + JSON.stringify(resp) + "")
          .then((resp) => JSON.parse(resp))
          .then((obj) => {
            if (obj.hasOwnProperty("VendorName")){
              sessionStorage.vendors = JSON.stringify(obj);
              //alert(JSON.stringify(obj))
              window.location.assign("/modifyVendor");
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
