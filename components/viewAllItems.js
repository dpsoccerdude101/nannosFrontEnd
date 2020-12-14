import { html, component, useEffect, useState } from "haunted";
import { useTitle, navigateTo } from "haunted-router";

export function ViewAllItems() {
  useEffect(() => useTitle("View All Items"), []);
  const [items, setItems] = useState([history.state]);

  return html`
    <div className="container">
      <br />
      <table class="table table-dark">
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
          <th>StoreId</th>
          <th>QuantityInStock</th>
        </tr>
        ${items[0].map(
          (item) =>
            html`<tr>
              ${Object.values(item).map((value) => html`<td>${value}</td>`)}
            </tr>`
        )}
      </table>
      <button @click=${() => navigateTo("/")}>Done</button>
    </div>
  `;
}
customElements.define(
  "view-all-items",
  component(ViewAllItems, { useShadowDOM: false })
);
