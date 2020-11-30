import { html, component } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm } from "../functions/functions.js";

export function ModifyItem() {
  useTitle("Modify Item");
  return html`
    <form
      @submit=${(e) => {
        e.preventDefault();
          submitForm(
            e,
            "https://www.nannosfoods.codes/itemUpdateJSONResponseCollin.php"
          )
            .then((res) => res.json())
            .then((res) => JSON.parse(res))
            .then((obj) => {
              if (obj.result == "success") {
                console.dir(obj);
                sessionStorage.removeItem("items");
                navigateTo("/employeeMenu");
              } else {
                //Reset all input element's values.
                alert("Update Failed.");
              }
            })
            .catch((error) => alert(error));
        
      }}
    >
      <div class="form-container" className="container">
        <label htmlFor="ItemId">
            Item ID
        </label>
        <input
          type="text"
          name="ItemId"
          value="${JSON.parse(sessionStorage.items).ItemId}"
          required
          readonly
        />
        <label htmlFor="Description">
          Description
        </label>
        <input
          type="text"
          placeholder="Description"
          maxlength="150"
          name="Description"
          required
          value="${JSON.parse(sessionStorage.items).Description}"
        />
        <label htmlFor="Size">
          Size
        </label>
        <input
          type="text"
          placeholder="Size"
          maxlength="30"
          name="Size"
          required
          value="${JSON.parse(sessionStorage.items).Size}"
        />
        <label htmlFor="Division">
          Division
        </label>
        <input
          type="text"
          placeholder="Division"
          maxlength="20"
          name="Division"
          required
          value="${JSON.parse(sessionStorage.items).Division}"
        />
        <label htmlFor="Department">
          Department
        </label>
        <input
          type="text"
          placeholder="Department"
          maxlength="25"
          name="Department"
          required
          value="${JSON.parse(sessionStorage.items).Department}"
        />
        <label htmlFor="Category">
          Category
        </label>
        <input
          type="text"
          placeholder="Category"
          maxlength="10"
          name="Category"
          required
          value="${JSON.parse(sessionStorage.items).Category}"
        />
        <label htmlFor="ItemCost">
          Item Cost
        </label>
        <input
          type="text"
          placeholder="ItemCost"
          maxlength="10"
          name="ItemCost"
          required
          value="${JSON.parse(sessionStorage.items).ItemCost}"
        />
        <label htmlFor="ItemRetail">
          Item Retail
        </label>
        <input
          type="text"
          placeholder="ItemRetail"
          maxlength="10"
          name="ItemRetail"
          required
          value="${JSON.parse(sessionStorage.items).ItemRetail}"
        />
        <label htmlFor="ImageFileName">
          Image File Name
        </label>
        <input
          type="text"
          placeholder="ImageFileName"
          maxlength="50"
          name="ImageFileName"
          required
          value="${JSON.parse(sessionStorage.items).ImageFileName}"
        />
        </label>
        <button type="submit">Modify Store</button>
      </div>
    </form>
  `;
}
customElements.define(
  "modify-item",
  component(ModifyItem, { useShadowDOM: false })
);