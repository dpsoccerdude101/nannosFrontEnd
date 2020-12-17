import { html, virtual } from "haunted";
import StoreSelection from "./StoreSelection.js";
const LockedStoreSelection = virtual(
  ({
    selectedStoreID,
    setselectedStoreID,
    storeNames,
    lockStoreSelection,
    setLockStoreSelection,
  }) => {
    return html`
      ${StoreSelection({
        selectedStoreID,
        setselectedStoreID,
        storeNames,
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
          setOrder([]);
        }}
        ?disabled=${!lockStoreSelection}
      >
        Cancel Store Selection
      </button>
    `;
  }
);
export default LockedStoreSelection;
