import { html, virtual, useState } from "haunted";
import {
  deleteItem,
  modReceiptQuantity,
} from "../../../functions/functions.js";
const ReturnReceiptItem = virtual(
  ({ item, index, setReturnOrder, returnOrder }) => {
    const [modify, setModify] = useState(false);
    return html`<li>
      ${item.Description} x
      ${!modify
        ? html`${item.QuantityReturning}<button
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
              max="${item.QuantityReturning}"
              min="0"
              value=${item.QuantityReturning}
            /><button
              @click=${(e) => {
                if (e.target.previousSibling.reportValidity()) {
                  const value = e.target.previousSibling.value;
                  if (value >= 0) {
                    if (value == 0)
                      deleteItem(setReturnOrder, returnOrder, index);
                    else if (value < 1500)
                      modReceiptQuantity(
                        value,
                        setReturnOrder,
                        returnOrder,
                        index,
                        item
                      );
                    setModify(false);
                  }
                }
              }}
            >
              Confirm Quantity
            </button> `}
    </li>`;
  }
);
export default ReturnReceiptItem;
