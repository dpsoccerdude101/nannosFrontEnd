import { html, component, useState, useEffect } from "haunted";
import { nothing } from "lit-html";
import { useTitle, navigateTo } from "haunted-router";
import {
  fetchOrderStores,
  fetchOrderItems,
  fetchOrderVendors,
  submitReturn,
} from "../../functions/functions.js";
import VendorSelection from "./subComponents/VendorSelection.js";
import LockedStoreSelection from "./subComponents/LockedStoreSelection.js";
import ItemSelection from "./subComponents/ItemSelection.js";
import ItemsInStock from "./subComponents/ItemsInStock.js";
import CurrentOrder from "./subComponents/CurrentOrder.js";
import CurrentReturn from "./subComponents/CurrentReturn.js";
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
  const [returnOrder, setReturnOrder] = useState([]);
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
        const message = await response.json();
        console.dir(message);
        if (message.hasOwnProperty("result"))
          alert("Store Does not have any items in stock");
        else {
          const itemsStoreHasInStock = message.map((item) => {
            return {
              ...item,
              StoreId: selectedStoreID,
              VendorId: selectedVendorID,
            };
          });
          setItems(itemsStoreHasInStock);
        }
      } else alert("Error Code: " + response.status);
    }
  }, [
    lockVendorSelection,
    selectedVendorID,
    lockStoreSelection,
    selectedStoreID,
  ]);
  useEffect(() => {
    if (items.length > 0) setSelectedItem(items.ItemId);
  }, [items]);

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
        ${VendorSelection({
          lockVendorSelection,
          selectedVendorID,
          setselectedVendorID,
          vendorNames,
          setLockVendorSelection,
          setReturnOrder,
        })}
        <br /><br />
        ${lockVendorSelection
          ? LockedStoreSelection({
              selectedStoreID,
              setselectedStoreID,
              storeNames,
              lockStoreSelection,
              setLockStoreSelection,
              setReturnOrder,
            })
          : nothing}
        <br /><br />
        <br /><br />
        ${lockStoreSelection
          ? ItemsInStock({
              selectedItem,
              setSelectedItem,
              items,
              setItems,
              returnOrder,
              setReturnOrder,
            })
          : nothing}
        <br />
      </div>
      <hr />
      <div className="column">
        ${lockStoreSelection
          ? CurrentReturn({
              returnOrder,
              setReturnOrder,
            })
          : nothing}
        <br />
        <button
          ?disabled=${!lockStoreSelection || returnOrder.length == 0}
          @click=${async (e) => {
            console.dir(returnOrder);
            submitReturn(returnOrder);
          }}
        >
          Place Return
        </button>
      </div>
    </div>`;
}

customElements.define(
  "process-return",
  component(ProcessReturn, { useShadowDOM: false })
);
