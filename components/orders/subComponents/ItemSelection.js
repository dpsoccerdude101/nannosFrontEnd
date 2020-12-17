import { html, virtual, useState } from "haunted";
const ItemSelection = virtual(
  ({
    selectedItem,
    setSelectedItem,
    items,
    quantity,
    setQuantity,
    setOrder,
    order,
    selectedVendorID,
    orderID,
    itemRandoArg,
  }) => {
    return html`<label>Select an Item from This Vendor</label><br />
      <select
        id="Description"
        name="Description"
        required
        value=${selectedItem}
        @change=${(e) => setSelectedItem(e.target.value)}
      >
        ${itemRandoArg
          ? items.map(
              (item) =>
                html`<option value="${item.ItemId}">
                  ${item.Description}
                </option>`
            )
          : items
              .filter((item) => item.VendorId == selectedVendorID)
              .map(
                (item) =>
                  html`<option value="${item.ItemId}">
                    ${item.Description}
                  </option>`
              )}</select
      ><br /><br />
      <label>Quantity</label><br />
      <input
        type="number"
        id="Quantity"
        name="Quantity"
        max="1000"
        min="1"
        value=${quantity}
        @change=${(e) =>
          e.target.value > 0 && e.target.value < 1500
            ? setQuantity(e.target.value)
            : ""}
      /><br />
      <button
        type="button"
        @click=${() => {
          let selItem = items.find((item) => item.ItemId == selectedItem);
          selItem = { ...selItem, quantity: quantity, OrderId: orderID };
          console.dir(selItem);
          setOrder([...order, selItem]);
          setQuantity(1);
        }}
      >
        Add Item To Order
      </button>`;
  }
);
export default ItemSelection;
