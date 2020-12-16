import { html, virtual, useState } from "haunted";
import { nothing } from "lit-html";
import OrderItem from "./OrderItem.js";
const CurrentOrder = virtual(({ setOrder, order }) => {
  return html`<h2>Current Order:</h2>
    <ul>
      ${order.length > 0
        ? order.map((item, index) =>
            OrderItem({ item, index, setOrder, order })
          )
        : nothing}
    </ul>`;
});
export default CurrentOrder;
