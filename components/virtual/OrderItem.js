/* import { html } from "https://unpkg.com/lit-html/lit-html.js";
import { virtual } from "https://unpkg.com/haunted/haunted.js"; */
import { html, virtual, useState } from "haunted";
export const OrderItem = virtual((props) => {
  const [modify, setModify] = useState(false);
  return html`<li>
    ${props.item.Description} x
    ${!modify
      ? html`${props.item.quantity}<button
            id=${Math.floor(Math.random() * Math.floor(1000000))}
            @click=${(e) => {
              setModify(true);
            }}
          >
            Modify Quantity?
          </button>`
      : html`<input
            type="number"
            id="Quantity"
            data-id=${props.item.ItemId}
            name="Quantity"
            max="1000"
            min="1"
            value=${props.item.quantity}
            @change=${(e) => {
              console.dir(props.index);
              e.target.value >= 0
                ? e.target.value == 0
                  ? props.setOrder(() => {
                      let tempOrder = [...props.order];
                      tempOrder.splice(props.index, 1);
                      return tempOrder;
                    })
                  : e.target.value < 1500
                  ? props.setOrder(() => {
                      let tempOrder = [...props.order];
                      tempOrder.splice(props.index, 1, {
                        ...props.item,
                        quantity: e.target.value,
                      });
                      return tempOrder;
                    })
                  : ""
                : "";
            }}
          /><button @click=${() => setModify(false)}>
            Confirm Quantity
          </button> `}
  </li>`;
});
