import { html, virtual, useState } from "haunted";
import { nothing } from "lit-html";
import ReturnItem from "./ReturnItem.js";
import OrderItem from "./OrderItem.js";
import ReturnReceiptItem from "./ReturnReceiptItem.js";
const CurrentReturn = virtual(({ returnOrder, setReturnOrder }) => {
  return html`<h2>Current Return:</h2>
    <ul>
      ${returnOrder.length > 0
        ? returnOrder.map((item, index) =>
            ReturnReceiptItem({ item, index, setReturnOrder, returnOrder })
          )
        : nothing}
    </ul>`;
});
export default CurrentReturn;
