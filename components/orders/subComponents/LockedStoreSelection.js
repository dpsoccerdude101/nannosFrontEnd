import { html, virtual } from "haunted";
import StoreSelection from "./StoreSelection.js";
const LockedStoreSelection = virtual(
  ({
    selectedStoreID,
    setselectedStoreID,
    storeNames,
    lockStoreSelection,
    setLockStoreSelection,
    setReturnOrder
  }) => {
    return html`
      ${StoreSelection({
        selectedStoreID,
        setselectedStoreID,
        storeNames,
        lockStoreSelection,
      })}
      <button
        @click=${() => setLockStoreSelection(true)}
        ?disabled=${lockStoreSelection}
      >
        Confirm Store Selection
      </button>
      <button
        @click=${() => {
          setLockStoreSelection(false);
          setReturnOrder([]);
        }}
        ?disabled=${!lockStoreSelection}
      >
        Cancel Store Selection
      </button>
    `;
  }
);
export default LockedStoreSelection;
