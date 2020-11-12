import { html } from "https://unpkg.com/lit-html/lit-html.js";
import { component } from "https://unpkg.com/haunted/haunted.js";
import { submitForm } from "/functions/functions.js";

export function ModifyItem() {

  return html`
    <form
      @submit=${(e) => {
        e.preventDefault();
        
          //sessionStorage.clear();
          submitForm(
            e,
            "https://www.nannosfoods.codes/itemUpdateJSONResponseCollin.php"
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
                alert("Update Failed.");
              }
            })
            .catch((error) => alert(error));
        
      }}
    >
      <div className="container"><br />
        <label htmlFor="ItemId">
            <b>Item ID</b>
        </label>
        <input
          type="text"
          name="ItemId"
          value="${JSON.parse(sessionStorage.vendors).ItemId}"
          required
          readonly
        /></br>
        <label htmlFor="Description">
          <b>Description</b>
        </label>
        <input
          type="text"
          placeholder="Description"
          maxlength="150"
          name="Description"
          required
          value="${JSON.parse(sessionStorage.vendors).Description}"
        /><br />
        <label htmlFor="Size">
          <b>Size</b>
        </label>
        <input
          type="text"
          placeholder="Size"
          maxlength="30"
          name="Size"
          required
          value="${JSON.parse(sessionStorage.vendors).Size}"
        /><br />
        <label htmlFor="Division">
          <b>Division</b>
        </label>
        <input
          type="text"
          placeholder="Division"
          maxlength="20"
          name="Division"
          required
          value="${JSON.parse(sessionStorage.vendors).Division}"
        /><br />
        <label htmlFor="Department">
          <b>Department</b>
        </label>
        <input
          type="text"
          placeholder="Department"
          maxlength="25"
          name="Department"
          required
          value="${JSON.parse(sessionStorage.vendors).Department}"
        /><br />
        <label htmlFor="Category">
          <b>Category</b>
        </label>
        <input
          type="text"
          placeholder="Category"
          maxlength="10"
          name="Category"
          required
          value="${JSON.parse(sessionStorage.vendors).Category}"
        /><br />
        <label htmlFor="ItemCost">
          <b>Item Cost</b>
        </label>
        <input
          type="text"
          placeholder="ItemCost"
          maxlength="10"
          name="ItemCost"
          required
          value="${JSON.parse(sessionStorage.vendors).ItemCost}"
        /><br />
        <label htmlFor="ItemRetail">
          <b>Item Retail</b>
        </label>
        <input
          type="text"
          placeholder="ItemRetail"
          maxlength="10"
          name="ItemRetail"
          required
          value="${JSON.parse(sessionStorage.vendors).ItemRetail}"
        /><br />
        <label htmlFor="ImageFileName">
          <b>Image File Name</b>
        </label>
        <input
          type="text"
          placeholder="ImageFileName"
          maxlength="50"
          name="ImageFileName"
          required
          value="${JSON.parse(sessionStorage.vendors).ImageFileName}"
        /><br />
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