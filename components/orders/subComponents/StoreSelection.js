import { html, virtual } from "haunted";

const StoreSelection = virtual(
  ({ selectedStoreID, setselectedStoreID, storeNames, lockStoreSelection }) => {
    return html`<label>Select a store</label><br />
      ${typeof lockStoreSelection != "undefined"
        ? html`<select
            id="StoreName"
            name="StoreName"
            required
            value=${selectedStoreID}
            ?disabled=${lockStoreSelection}
            @change=${(e) => setselectedStoreID(e.target.value)}
            required
          >
            ${storeNames.map(
              (store) =>
                html`<option value="${store.StoreId}">
                  ${store.StoreName}
                </option>`
            )}
          </select>`
        : html`<select
            id="StoreName"
            name="StoreName"
            required
            value=${selectedStoreID}
            @change=${(e) => setselectedStoreID(e.target.value)}
            required
          >
            ${storeNames.map(
              (store) =>
                html`<option value="${store.StoreId}">
                  ${store.StoreName}
                </option>`
            )}
          </select>`} `;
  }
);
export default StoreSelection;
