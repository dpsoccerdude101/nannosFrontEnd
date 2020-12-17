import { html, component, useState, useEffect } from "haunted";
import {
  submitModifiedOrder
} from "../../functions/functions.js";
import ItemSelection from "./subComponents/ItemSelection.js";
import CurrentOrder from "./subComponents/CurrentOrder.js";
export function AddToOrder() {
  /**
   * State
   */
  const [selectedVendorID, setselectedVendorID] = useState(1);
  const [selectedItem, setSelectedItem] = useState({});
  const [order, setOrder] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [orderID, setOrderID] = useState();
  const [items, setItems] = useState([]);
  const [showOrderID, setShowOrderID] = useState(true);
  const [vendorName, setVendorName] = useState("");
  const itemRandoArg = true;


  /**
   * Initialize First Selected Item 
   */
  useEffect(() => {
    if (!showOrderID) {
      setSelectedItem(items[0].ItemId);
    }
  }, [showOrderID]);

  return html`
    <style>
      * {
        box-sizing: border-box;
      }
      .column {
        float: left;
        width: 33.33%;
        padding: 10px;
        height: 300px;
      }
      .row:after {
        content: "";
        display: table;
        clear: both;
      }
    </style>
    ${showOrderID
      ? html`<div class="form-container" className="container">
          <div class="form-row">
            <div class="label-and-input">
              <label htmlFor="OrderID"> Order ID: </label>
              <input
                class="name"
                type="text"
                placeholder="Enter Order ID here (1234)"
                name="OrderID"
                pattern="[a-z A-Z]{1,50}"
                maxlength="9"
                required
                @change="${(e) => setOrderID(e.target.value)}"
              />
            </div>
            <button
              @click="${async (e) => {
                const response = await fetch(
                  "https://www.nannosfoods.codes/populateAddToOrder.php",
                  {
                    method: "POST",
                    body: JSON.stringify({ OrderId: orderID }),
                  }
                );
                if (response.ok) {
                  const itemsReturned = await response.json();
                  if (typeof itemsReturned == "object") {
                    setItems(itemsReturned);
                    setVendorName(itemsReturned[0].VendorName.replace(/([a-z])([A-Z])/g, '$1 $2'))
                    setShowOrderID(false);
                  } else alert("Order ID does not match.");
                  /* if (message.result == "success") navigateTo("/");
              else alert("Insert Failed. " + message.result); */
                } else alert("Error Code: " + response.status);
              }}"
            >
              Submit
            </button>
          </div>
        </div>`
      : html`<div className="row">
          <div className="column">
            <h2>Select Items to Add to Your Order from ${vendorName}</h2>
            ${ItemSelection({
              selectedItem,
              setSelectedItem,
              items,
              quantity,
              setQuantity,
              setOrder,
              order,
              selectedVendorID,
              orderID,
              itemRandoArg
            })}

            <br /><br />

            <br />
          </div>
          <hr />
          <div className="column">
            ${CurrentOrder({ setOrder, order })}
            <br />
            <button
              ?disabled=${order.length == 0}
              @click=${async (e) => {
                console.dir(order);
                submitModifiedOrder(order);
              }}
            >
              Place Order
            </button>
          </div>
        </div>`}
  `;
}

customElements.define(
  "add-to-order",
  component(AddToOrder, { useShadowDOM: false })
);
