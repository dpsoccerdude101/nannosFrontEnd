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
import LockedStoreSelection from "./subComponents/LockedStoreSelection.js";
import ItemSelection from "./subComponents/ItemSelection.js";
import CurrentOrder from "./subComponents/CurrentOrder.js";
export function ProcessReturn() {
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
  const [lockStoreSelection, setLockStoreSelection] = useState(false);

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

    /* const items = await fetchOrderItems();
    setItems(items); */
  }, []);

  /**
   * Initialize First Selected Item after vendor has been chosen
   * -This is required as the DOM will not update the selected item if it
   *  is the first option in the select element as it assumes html form submission
   *  and does not bother to update the value
   */
  useEffect(async () => {
    if (lockVendorSelection && lockStoreSelection) {
      const response = await fetch(
        "https://www.nannosfoods.codes/populateProcessReturnItems.php",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            VendorId: selectedVendorID,
            StoreId: selectedStoreID,
          }),
        }
      );
      if (response.ok) {
        const itemsStoreHasInStock = await response.json();
        console.dir(itemsStoreHasInStock);
        /* const message = JSON.parse(responseJSON);
        if (message.result == "success") navigateTo("/");
        else alert("Insert Failed. " + message.result); */
      } else alert("Error Code: " + response.status);

      /* const filteredItems = items.filter(
        (item) => item.VendorId == selectedVendorID
      );
      if (filteredItems.length > 0) setSelectedItem(filteredItems[0].ItemId);
      else alert("This Vendor does not have any items."); */
    }
  }, [
    lockVendorSelection,
    selectedVendorID,
    lockStoreSelection,
    selectedStoreID,
  ]);

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
        <h2>Select Items to Return</h2>
        <label>Who is your vendor?</label>
        ${VendorSelection({
          lockVendorSelection,
          selectedVendorID,
          setselectedVendorID,
          vendorNames,
          setLockVendorSelection,
          setOrder,
        })}
        <br /><br />
        <label>What Store?</label>
        ${lockVendorSelection
          ? LockedStoreSelection({
              selectedStoreID,
              setselectedStoreID,
              storeNames,
              lockStoreSelection,
              setLockStoreSelection,
            })
          : nothing}
        <br /><br />
        <br /><br />
        ${lockStoreSelection
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
            submitOrder(order, selectedStoreID);
          }}
        >
          Place Order
        </button>
      </div>
    </div>`;
}

customElements.define(
  "process-return",
  component(ProcessReturn, { useShadowDOM: false })
);
