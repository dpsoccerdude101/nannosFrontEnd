import { html, component } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm } from "../functions/functions.js";

export function AddItem() {
  useTitle("Add Item");
  return html`
    <form
      @submit=${(e) => {
        submitForm(
          e,
          "https://www.nannosfoods.codes/AddItemJSONResponseAdam.php"
        )
          .then((res) => res.json())
          .then((res) => JSON.parse(res))
          .then((obj) => {
            if (obj.result == "success") {
              navigateTo("/");
              //navigateTo("/employeeMenu");
            } else {
              //Reset all input element's values.
              e.target.reset();
              alert("Failed to Add");
            }
          })
          .catch((error) => alert(error));
      }}
    >
      <div class="form-container" className="container">
        <label htmlFor="Description">
          Description
        </label>
        <input
          type="text"
          placeholder="Enter a Description"
          name="Description"
          required />
        <label htmlFor="Size">
          Size
        </label>
        <input type="text" placeholder="Enter the Size" name="Size" required />

        <label htmlFor="Division">
          Division
        </label>
        <input
          type="text"
          placeholder="Enter the Divison"
          name="Division"
          required />

        <label htmlFor="Department">
          Department
        </label>
        <input
          type="text"
          placeholder="Enter the Department"
          name="Department"
          required />

        <label htmlFor="Category">
          Category
        </label>
        <input
          type="text"
          placeholder="Enter the Category"
          name="Category"
          required />

        <label htmlFor="ItemCost">
          ItemCost
        </label>
        <input
          type="text"
          placeholder="Enter the ItemCost"
          name="ItemCost"
          required />

        <label htmlFor="ItemRetail">
          ItemRetail
        </label>
        <input
          type="text"
          placeholder="Enter the ItemRetail"
          name="ItemRetail"
          required />

        <label htmlFor="ImageFileName">
          ImageFileName
        </label>
        <input
          type="text"
          placeholder="Enter The Name of the Image File"
          name="ImageFileName"
          required />

        <label htmlFor="VenID">
          VendorID
        </label>
        <input
          type="text"
          placeholder="Enter the VendorId"
          name="VenId"
          required />

        <button type="submit">Add</button>
      </div>
    </form>
  `;
}
customElements.define("add-item", component(AddItem, { useShadowDOM: false }));
