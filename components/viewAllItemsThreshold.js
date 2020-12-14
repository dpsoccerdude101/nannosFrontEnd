import { html, useEffect, component, useState } from "haunted";
import { useTitle, navigateTo } from "haunted-router";

export const ViewAllItemsThreshold = () => {
  const [items, setItems] = useState([history.state]);
  useEffect(() => {
    useTitle("View All Items");
  }, []);
  return html`
    <div className="container">
      <br />
      <table class="table table-dark">
        <tr>
          <th>InventoryId</th>
          <th>StoreId</th>
          <th>ItemId</th>
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
};
customElements.define(
  "view-all-items-threshold",
  component(ViewAllItemsThreshold, { useShadowDOM: false })
);
