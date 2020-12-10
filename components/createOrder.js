import { html, component, useState, useEffect } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm } from "../functions/functions.js";
import { OrderItem } from "./virtual/OrderItem";

export function createOrder() {
  useTitle("Place a new Order");
  //Populating Select Tag of stores
  const [storeNames, setStoreNames] = useState([]);
  const [vendorNames, setVendorNames] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedVendorID, setselectedVendorID] = useState(1);
  const [selectedStoreID, setselectedStoreID] = useState(1);
  const [selectedItem, setSelectedItem] = useState({});
  const [lockVendorSelection, setLockVendorSelection] = useState(false);
  const [order, setOrder] = useState([]);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => console.dir(order), [order]);
  useEffect(() => {
    fetch("https://www.nannosfoods.codes/populateCreateOrderStoresMike.php", {
      method: "POST",
    })
      .then((response) => {
        return response.json();
      })
      .then((storeNames) => {
        setStoreNames(storeNames);
        setselectedStoreID(storeNames[0].StoreId);
      });

    fetch("https://www.nannosfoods.codes/populateCreateOrderVendorsMike.php", {
      method: "POST",
    })
      .then((response) => {
        return response.json();
      })
      .then((vendorNames) => {
        console.log(vendorNames);
        setVendorNames(vendorNames);
        setselectedVendorID(vendorNames[0].VendorID);
      });

    fetch("https://www.nannosfoods.codes/populateCreateOrderItemsMike.php", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((items) => {
        setItems(items);
      });
  }, []);
  useEffect(() => {
    if (lockVendorSelection) {
      setSelectedItem(
        items.filter((item) => item.VendorId == selectedVendorID)[0].ItemId
      );
    }
  }, [lockVendorSelection, selectedVendorID]);
  //End of Select Logic
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
</head>
<body>
<div className="row">
  <div className="column">
    <h2>Select Items to Add</h2>
    <label>Select a Vendor to order from</label><br>
      <select id="VendorName" name="VendorName" ?disabled=${lockVendorSelection} value=${selectedVendorID} @change=${(
    e
  ) => setselectedVendorID(e.target.value)} required>
        ${vendorNames.map(
          (vendor) =>
            html`<option value="${vendor.VendorID}">
              ${vendor.VendorName}
            </option>`
        )}
      </select>
      <button @click=${() =>
        setLockVendorSelection(
          true
        )} ?disabled=${lockVendorSelection}>Confirm Vendor Selection</button>
      <button @click=${() => {
        setLockVendorSelection(false);
        setOrder([]);
      }}
      ?disabled=${!lockVendorSelection}>Cancel Vendor Selection</button>
      <br><br>
    <label>Select a store</label><br>
      <select id="StoreName" name="StoreName" required value=${selectedStoreID} @change=${(
    e
  ) => setselectedStoreID(e.target.value)} required>
        ${storeNames.map(
          (store) =>
            html`<option value="${store.StoreId}">${store.StoreName}</option>`
        )}
      </select><br><br>
      <br><br>
      ${
        lockVendorSelection
          ? html`<label>Select an Item from This Vendor</label><br>
      <select id="Description" name="Description" required value=${selectedItem} @change=${(
              e
            ) => setSelectedItem(e.target.value)}>
      ${items
        .filter((item) => item.VendorId == selectedVendorID)
        .map(
          (item) =>
            html`<option value="${item.ItemId}">${item.Description}</option>`
        )}
      </select><br><br>
      <label>Quantity</label><br>
      <input type="number" id="Quantity" name="Quantity" max="1000" min="1" value=${quantity}  @change=${(
              e
            ) =>
              e.target.value > 0 && e.target.value < 1500
                ? setQuantity(e.target.value)
                : ""}><br>
      <button type="button" @click=${() => {
        console.log(
          "item found: " +
            items.find((item) => item.ItemId == selectedItem).ItemId
        );
        console.log(selectedItem);
        let selItem = items.find((item) => item.ItemId == selectedItem);
        console.dir(selItem);
        selItem = { ...selItem, quantity: quantity };
        console.dir(selItem);

        setOrder([...order, selItem]);
        console.log(typeof order);
        //reset quantity
        setQuantity(1);
      }}> Add Item To Order </button><br>
  </div>
  <hr>
  <div className="column">
    <h2>Current Order:</h2>
      <ul>
        ${
          order.length > 0
            ? order.map((item, index) =>
                OrderItem({ item, index, setOrder, order })
              )
            : html``
        }
      </ul>`
          : html``
      }
      <br>
        <button ?disabled=${!lockVendorSelection || order.length == 0}
        @click=${(e) => {
          console.log(JSON.stringify(order));
          let modOrder = order.map((item) => {
            return { ...item, StoreId: selectedStoreID };
          });
          console.dir(modOrder);
          fetch("https://www.nannosfoods.codes/CreateOrder.php", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(modOrder),
          })
            .then((res) => res.json())
            .then((res) => JSON.parse(res))
            .then((obj) => {
              console.dir(obj);
              console.log(obj.result);
              console.log(typeof obj);
              if (obj.result == "success") {
                console.dir(obj);
                navigateTo("/");
              } else {
                //Reset all input element's values.
                //e.target.reset();
                console.dir(obj.result);
                alert("Insert Failed.");
              }
            })
            .catch((error) => alert(error));
        }}>Place Order</button>
  </div>
</div>`;
}

customElements.define(
  "create-order",
  component(createOrder, { useShadowDOM: false })
);
