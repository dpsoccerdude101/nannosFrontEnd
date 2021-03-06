import { html, component, useState, useEffect } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm } from "../functions/functions.js";

export function ModifyItem() {
  useEffect(() => useTitle("Modify Item"), []);
  console.dir(history.state);
  const [item, setItem] = useState(history.state);

  return html`
    <form
      @submit=${async (e) => {
        const response = await submitForm(
          e,
          "https://www.nannosfoods.codes/itemUpdateJSONResponseCollin.php"
        );
        if (response.ok) {
          const responseJSON = await response.json();
          const responseObj = JSON.parse(responseJSON);
          if (responseObj.result == "success") {
            navigateTo("/");
          } else {
            alert("Update Failed.");
          }
        } else alert("Error Code: " + response.status);
      }}
    >
      <div class="form-container" className="container">
        <label htmlFor="ItemId">
            Item ID
        </label>
        <input
          type="text"
          name="ItemId"
          value="${item.ItemId}"
          required
          readonly
        /><br>
        <label htmlFor="Description">
          Description
        </label>
        <input
          type="text"
          placeholder="Description"
          maxlength="150"
          name="Description"
          required
          value="${item.Description}"
        /><br />
        <label htmlFor="Size">
          Size
        </label>
        <input
          type="text"
          placeholder="Size"
          maxlength="30"
          name="Size"
          required
          value="${item.Size}"
        /><br />
        <label htmlFor="Division">
          Division
        </label>
        <input
          type="text"
          placeholder="Division"
          maxlength="20"
          name="Division"
          required
          value="${item.Division}"
        /><br />
        <label htmlFor="Department">
          Department
        </label>
        <input
          type="text"
          placeholder="Department"
          maxlength="25"
          name="Department"
          required
          value="${item.Department}"
        /><br />
        <label htmlFor="Category">
          Category
        </label>
        <input
          type="text"
          placeholder="Category"
          maxlength="10"
          name="Category"
          required
          value="${item.Category}"
        /><br />
        <label htmlFor="ItemCost">
          Item Cost
        </label>
        <input
          type="text"
          placeholder="ItemCost"
          maxlength="10"
          name="ItemCost"
          required
          value="${item.ItemCost}"
        /><br />
        <label htmlFor="ItemRetail">
          Item Retail
        </label>
        <input
          type="text"
          placeholder="ItemRetail"
          maxlength="10"
          name="ItemRetail"
          required
          value="${item.ItemRetail}"
        /><br />
        <label htmlFor="ImageFileName">
          Image File Name
        </label>
        <input
          type="text"
          placeholder="ImageFileName"
          maxlength="50"
          name="ImageFileName"
          required
          value="${item.ImageFileName}"
        /><br />
        </label>
        <button type="submit">Modify Item</button>
      </div>
    </form>
  `;
}
customElements.define(
  "modify-item",
  component(ModifyItem, { useShadowDOM: false })
);
