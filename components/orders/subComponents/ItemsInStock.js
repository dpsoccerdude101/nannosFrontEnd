import { html, virtual, useState } from "haunted";
import { nothing } from "lit-html";
import ReturnItem from "./ReturnItem.js";
const ItemsInStock = virtual(
  ({
    selectedItem,
    setSelectedItem,
    items,
    setItems,
    returnOrder,
    setReturnOrder,
  }) => {
    return html`<h2>Items In Stock:</h2>
      <ul>
        ${items.length > 0
          ? items.map((item, index) =>
              ReturnItem({ item, index, setReturnOrder, returnOrder })
            )
          : nothing}
      </ul>`;
  }
);
export default ItemsInStock;
