import { html, virtual } from "haunted";

const RepresentativeNavbar = virtual(() => {
  return html`
    <div
      class="btn-toolbar"
      role="toolbar"
      aria-label="Toolbar with button groups"
    >
      <div class="btn-group rep-navbar">
        <button
          type="button"
          class="btn btn-info dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Manage Vendor
        </button>
        <div class="dropdown-menu">
          <a is="router-link" class="dropdown-item" href="/registerVendor"
            >Register New</a
          >
          <a is="router-link" class="dropdown-item" href="/lookupVendor"
            >Modify Existing</a
          >
          <a is="router-link" class="dropdown-item" href="/deleteVendor"
            >Remove Existing</a
          >
        </div>
      </div>
      <div class="btn-group rep-navbar">
        <button
          type="button"
          class="btn btn-info dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Manage Store
        </button>
        <div class="dropdown-menu">
          <a is="router-link" class="dropdown-item" href="/AddStore"
            >Add New Store</a
          >
          <a is="router-link" class="dropdown-item" href="/lookupStore"
            >Modify Existing</a
          >
          <a is="router-link" class="dropdown-item" href="/deleteStore"
            >Remove Store</a
          >
        </div>
      </div>
      <div class="btn-group rep-navbar">
        <button
          type="button"
          class="btn btn-info dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Manage Inventory
        </button>
        <div class="dropdown-menu">
          <a is="router-link" class="dropdown-item" href="/AddItem"
            >Add New Item</a
          >
          <a is="router-link" class="dropdown-item" href="/lookupItem"
            >Modify Existing</a
          >
          <a is="router-link" class="dropdown-item" href="/deleteItem"
            >Remove Existing</a
          >
          <a is="router-link" class="dropdown-item" href="/processDelivery"
            >Process Delivery</a
          >
          <a is="router-link" class="dropdown-item" href="/processReturn"
            >Process Return</a
          >
        </div>
      </div>
      <div class="btn-group rep-navbar">
        <button
          type="button"
          class="btn btn-info dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Manage Customer
        </button>
        <div class="dropdown-menu">
          <a is="router-link" class="dropdown-item" href="/AddMember"
            >Add New Member</a
          >
          <a is="router-link" class="dropdown-item" href="/lookupMember"
            >Modify Member</a
          >
          <a is="router-link" class="dropdown-item" href="/deleteMember"
            >Remove Member</a
          >
          <a is="router-link" class="dropdown-item" href="/customerPurchase"
            >New Purchase</a
          >
        </div>
      </div>
      <div class="btn-group rep-navbar">
        <button
          type="button"
          class="btn btn-info dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Manage Order
        </button>
        <div class="dropdown-menu">
          <a is="router-link" class="dropdown-item" href="/createOrder"
            >New Order</a
          >
          <a is="router-link" class="dropdown-item" href="/addToOrder"
            >Add to Existing</a
          >
        </div>
      </div>
      <div class="btn-group rep-navbar">
        <button
          type="button"
          class="btn btn-info dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Look Up
        </button>
        <div class="dropdown-menu">
          <a is="router-link" class="dropdown-item" href="/lookUpAllItems"
            >All Inventory Items</a
          >
          <a
            is="router-link"
            class="dropdown-item"
            href="/LookUpAllItemsThreshold"
            >All Low Items
          </a>
          <a is="router-link" class="dropdown-item" href="/ReportItemsReturned">
            All Returns
          </a>
          <a
            is="router-link"
            class="dropdown-item"
            href="/ReportPurchasesMadeByCustomer"
            >Completed Customer Purchase
          </a>
          <a is="router-link" class="dropdown-item" href="/vendorLogin"
            >Placed Orders</a
          >
        </div>
      </div>
    </div>
  `;
});
export default RepresentativeNavbar;
