import { html, virtual, useState } from "haunted";
import { deleteItem, modQuantity } from "../../../functions/functions.js";
const OrderItem = virtual(({ item, index, setOrder, order }) => {
  const [modify, setModify] = useState(false);
  return html`<li>
    ${item.Description} x
    ${!modify
      ? html`${item.quantity}<button
            @click=${() => {
              setModify(true);
            }}
          >
            Modify Quantity?
          </button>`
      : html`<input
            type="number"
            id="Quantity"
            data-id=${item.ItemId}
            name="Quantity"
            max="1500"
            min="0"
            value=${item.quantity}
          /><button
            @click=${(e) => {
              if (e.target.previousSibling.reportValidity()) {
                const value = e.target.previousSibling.value;
                if (value >= 0) {
                  if (value == 0) deleteItem(setOrder, order, index);
                  else if (value < 1500)
                    modQuantity(value, setOrder, order, index, item);
                  setModify(false);
                }
              }
            }}
          >
            Confirm Quantity
          </button> `}
  </li>`;
});
export default OrderItem;
