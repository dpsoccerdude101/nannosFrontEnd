import { html, component, useState, useEffect } from "haunted";
import { nothing } from "lit-html";
import { useTitle, navigateTo } from "haunted-router";
import {
  fetchOrderStores,
  fetchOrderItems,
  fetchOrderVendors,
  submitOrder,
} from "../../functions/functions.js";
import VendorSelection from "./subComponents/VendorSelection.js";
import StoreSelection from "./subComponents/StoreSelection.js";
import ItemSelection from "./subComponents/ItemSelection.js";
import CurrentOrder from "./subComponents/CurrentOrder.js";
export function createOrder() {
  /**
   * State
   */
  const [storeNames, setStoreNames] = useState([]);
  const [vendorNames, setVendorNames] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedVendorID, setselectedVendorID] = useState(1);
  const [selectedStoreID, setselectedStoreID] = useState(1);
  const [selectedItem, setSelectedItem] = useState({});
  const [lockVendorSelection, setLockVendorSelection] = useState(false);
  const [order, setOrder] = useState([]);
  const [quantity, setQuantity] = useState(1);

  /**
   * Side Effects (Run On Component Load)
   */
  useEffect(async () => {
    useTitle("Place a new Order");
    const storeNames = await fetchOrderStores();
    setStoreNames(storeNames);
    setselectedStoreID(storeNames[0].StoreId);

    const vendorNames = await fetchOrderVendors();
    setVendorNames(vendorNames);
    setselectedVendorID(vendorNames[0].VendorID);

    const items = await fetchOrderItems();
    setItems(items);
  }, []);

  /**
   * Initialize First Selected Item after vendor has been chosen
   * -This is required as the DOM will not update the selected item if it
   *  is the first option in the select element as it assumes html form submission
   *  and does not bother to update the value
   */
  useEffect(() => {
    if (lockVendorSelection) {
      setSelectedItem(
        items.filter((item) => item.VendorId == selectedVendorID)[0].ItemId
      );
    }
  }, [lockVendorSelection, selectedVendorID]);

  return html` <style>
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
    <div className="row">
      <div className="column">
        <h2>Select Items to Add</h2>
        ${VendorSelection({
          lockVendorSelection,
          selectedVendorID,
          setselectedVendorID,
          vendorNames,
          setLockVendorSelection,
          setOrder,
        })}
        <br /><br />
        ${StoreSelection({ selectedStoreID, setselectedStoreID, storeNames })}
        <br /><br />
        <br /><br />
        ${lockVendorSelection
          ? ItemSelection({
              selectedItem,
              setSelectedItem,
              items,
              quantity,
              setQuantity,
              setOrder,
              selectedVendorID,
              order,
            })
          : nothing}
        <br />
      </div>
      <hr />
      <div className="column">
        ${lockVendorSelection ? CurrentOrder({ setOrder, order }) : nothing}
        <br />
        <button
          ?disabled=${!lockVendorSelection || order.length == 0}
          @click=${async (e) => {
            submitOrder(order);
          }}
        >
          Place Order
        </button>
      </div>
    </div>`;
}

customElements.define(
  "create-order",
  component(createOrder, { useShadowDOM: false })
);
