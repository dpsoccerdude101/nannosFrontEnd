import { html, virtual, useState } from "haunted";
import { deleteItem, modQuantity } from "../../../functions/functions.js";
const ReturnItem = virtual(({ item, index, setReturnOrder, returnOrder }) => {
  const [modify, setModify] = useState(false);
  return html`<li>
    ${item.Description} x
    ${!modify
      ? html`${item.QuantityInStock}<button
            @click=${() => {
              setModify(true);
            }}
          >
            Return Item/s
          </button>`
      : html`<input
            type="number"
            id="Quantity"
            data-id=${item.ItemId}
            name="Quantity"
            placeholder="How many?"
            max="${item.QuantityInStock}"
            min="0"
            value=${item.QuantityInStock}
          /><button
            @click=${(e) => {
              if (e.target.previousSibling.reportValidity()) {
                const value = e.target.previousSibling.value;
                if (value >= 0) {
                  if (value == 0) {
                    /* deleteItem(setReturnOrder, returnOrder, index); */
                  } else if (value <= item.QuantityInStock) {
                    /**
                     * Add To Return Order
                     */
                    setReturnOrder(() => {
                      let tempOrder = [...returnOrder];
                      tempOrder.splice(index, 1, {
                        ...item,
                        QuantityReturning: value,
                      });
                      return tempOrder;
                    });
                  }
                }
                setModify(false);
              }
            }}
          >
            Confirm Return of ${item.Description}/s
          </button> `}
  </li>`;
});
export default ReturnItem;
