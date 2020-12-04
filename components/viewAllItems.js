import { html, component } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm } from "../functions/functions.js";

export function ViewAllItems() {
  useTitle("View All Items");
  const itemTemplates = [];
  JSON.parse(sessionStorage.items).map((item) => {
    itemTemplates.push(html`<tr>`);
    Object.values(item).forEach((val) => {
      itemTemplates.push(html`<td>${val}</td>`);
    },
    itemTemplates.push(html`</tr>`)
  )});
  return html`
    <style>
      table, th, td {
        border: 1px solid black;
      }
      table {
        width: 100%;
      }
    </style>
    <form
      @submit=${(e) => {
        e.preventDefault();
        navigateTo("/");        
      }}
    >
      <div className="container"><br />
        <table>
          <tr>
            <th>ItemId</th>
            <th>Description</th>
            <th>Size</th>
            <th>Division</th>
            <th>Department</th>
            <th>Category</th>
            <th>ItemCost</th>
            <th>ItemRetail</th>
            <th>ImageFilename</th>
            <th>VendorId</th>
            <th>Status</th>
          </tr>
          ${itemTemplates}
        </table>
        <button type="submit">Done</button>
      </div>
    </form>
  `;
}
customElements.define(
  "view-all-items",
  component(ViewAllItems, { useShadowDOM: false })
);