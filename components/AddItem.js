import { html, component } from "haunted";
import { submitForm } from "../functions/functions.js";

export function AddItem() {
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
              window.location.assign("/employeeMenu");
            } else {
              //Reset all input element's values.
              e.target.reset();
              alert("Failed to Add");
            }
          })
          .catch((error) => alert(error));
      }}
    >
      <div className="container">
        <label htmlFor="Description">
          <b>Description</b>
        </label>
        <input
          type="text"
          placeholder="Enter a Description"
          name="Description"
          required
        />
        <br />
        <label htmlFor="Size">
          <b>Size</b>
        </label>
        <input type="text" placeholder="Enter the Size" name="Size" required />
        <br />

        <label htmlFor="Division">
          <b>Division</b>
        </label>
        <input
          type="text"
          placeholder="Enter the Divison"
          name="Division"
          required
        />
        <br />

        <label htmlFor="Department">
          <b>Department</b>
        </label>
        <input
          type="text"
          placeholder="Enter the Department"
          name="Department"
          required
        />
        <br />

        <label htmlFor="Category">
          <b>Category</b>
        </label>
        <input
          type="text"
          placeholder="Enter the Category"
          name="Category"
          required
        />
        <br />

        <label htmlFor="ItemCost">
          <b>ItemCost</b>
        </label>
        <input
          type="text"
          placeholder="Enter the ItemCost"
          name="ItemCost"
          required
        />
        <br />

        <label htmlFor="ItemRetail">
          <b>ItemRetail</b>
        </label>
        <input
          type="text"
          placeholder="Enter the ItemRetail"
          name="ItemRetail"
          required
        />
        <br />

        <label htmlFor="ImageFileName">
          <b>ImageFileName</b>
        </label>
        <input
          type="text"
          placeholder="Enter The Name of the Image File"
          name="ImageFileName"
          required
        />
        <br />

        <label htmlFor="VenID">
          <b>VendorID</b>
        </label>
        <input
          type="text"
          placeholder="Enter the VendorId"
          name="VenId"
          required
        />
        <br />

        <button type="submit">Add</button>
      </div>
    </form>
  `;
}
customElements.define("add-item", component(AddItem, { useShadowDOM: false }));
