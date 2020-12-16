import { html, virtual } from "haunted";
const VendorSelection = virtual(
  ({
    lockVendorSelection,
    selectedVendorID,
    setselectedVendorID,
    vendorNames,
    setLockVendorSelection,
    setOrder,
  }) => {
    return html`
      <label>Select a Vendor to order from</label><br />
      <select
        id="VendorName"
        name="VendorName"
        ?disabled=${lockVendorSelection}
        value=${selectedVendorID}
        @change=${(e) => setselectedVendorID(e.target.value)}
        required
      >
        ${vendorNames.map(
          (vendor) =>
            html`<option value="${vendor.VendorID}">
              ${vendor.VendorName}
            </option>`
        )}
      </select>
      <button
        @click=${() => setLockVendorSelection(true)}
        ?disabled=${lockVendorSelection}
      >
        Confirm Vendor Selection
      </button>
      <button
        @click=${() => {
          setLockVendorSelection(false);
          setOrder([]);
        }}
        ?disabled=${!lockVendorSelection}
      >
        Cancel Vendor Selection
      </button>
    `;
  }
);
export default VendorSelection;
