import { html, component } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm } from "../functions/functions.js";

export function DeleteVendor() {
  useTitle("Delete Vendor");
  return html`
    <form
      @submit=${(e) => {
        submitForm(
          e,
          "https://www.nannosfoods.codes/deleteVendorJSONResponseMike.php"
        )
          .then((res) => res.json())
          .then((res) => JSON.parse(res))
          .then((obj) => {
            if (obj.result == "success") {
              console.dir(obj);
              navigateTo("/employeeMenu");
            } else {
              e.target.reset();
              alert("Deletion Failed.");
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
          title="Please Enter a Numeric ID"
          name="VendorID"
          required
        /><br />
        <button type="submit">Delete Vendor</button>
      </div>
    </form>
  `;
}
customElements.define(
  "delete-vendor",
  component(DeleteVendor, { useShadowDOM: false })
);
