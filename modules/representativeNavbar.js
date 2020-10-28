import { html } from "https://unpkg.com/lit-html/lit-html.js";
import { component } from "https://unpkg.com/haunted/haunted.js";

export function RepresentativeNavbar() {
  return html`
    <div class="btn-group">
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
        <a
          class="dropdown-item"
          href="/registerVendor"
          >Register New</a
        >
        <a
          class="dropdown-item"
          href="http://nannosfoodsdev.bitnamiapp.com/VendorModify.php"
          >Modify Existing</a
        >
        <a
          class="dropdown-item"
          href="http://nannosfoodsdev.bitnamiapp.com/deleteVendor.php"
          >Remove Existing</a
        >
      </div>

      <div class="btn-group">
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
          <a
            class="dropdown-item"
            href="http://nannosfoodsdev.bitnamiapp.com/AddNewStore.php"
            >Add New Store</a
          >
          <a
            class="dropdown-item"
            href="http://nannosfoodsdev.bitnamiapp.com/modifyStore.php"
            >Modify Existing</a
          >
          <a
            class="dropdown-item"
            href="http://nannosfoodsdev.bitnamiapp.com/deleteVendor.php"
            >Remove Store</a
          >
        </div>
        <div class="btn-group">
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
            <a
              class="dropdown-item"
              href="http://nannosfoodsdev.bitnamiapp.com/InventoryAdd.php"
              >Add New Item</a
            >
            <a
              class="dropdown-item"
              href="http://nannosfoodsdev.bitnamiapp.com/InventoryModify.php"
              >Modify Existing</a
            >
            <a
              class="dropdown-item"
              href="http://nannosfoodsdev.bitnamiapp.com/InventoryDelete.php"
              >Remove Existing</a
            >
            <a
              class="dropdown-item"
              href="http://nannosfoodsdev.bitnamiapp.com/processDelivery.php"
              >Process Delivery</a
            >
            <a
              class="dropdown-item"
              href="http://nannosfoodsdev.bitnamiapp.com/processReturn.php"
              >Process Return</a
            >
          </div>
          <div class="btn-group">
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
              <a
                class="dropdown-item"
                href="http://nannosfoodsdev.bitnamiapp.com/CustomerAdd.php"
                >Add New Member</a
              >
              <a
                class="dropdown-item"
                href="http://nannosfoodsdev.bitnamiapp.com/CustomerModify.php"
                >Modify Member</a
              >
              <a
                class="dropdown-item"
                href="http://nannosfoodsdev.bitnamiapp.com/CustomerDelete.php"
                >Remove Member</a
              >
              <a
                class="dropdown-item"
                href="http://nannosfoodsdev.bitnamiapp.com/CustomerNewPurchase.php"
                >New Purchase</a
              >
            </div>
            <div class="btn-group">
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
                <a
                  class="dropdown-item"
                  href="http://nannosfoodsdev.bitnamiapp.com/OrderCreate.php"
                  >New Order</a
                >
                <a
                  class="dropdown-item"
                  href="http://nannosfoodsdev.bitnamiapp.com/OrderAdd.php"
                  >Add to Existing</a
                >
              </div>
              <div class="btn-group">
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
                  <a
                    class="dropdown-item"
                    href="http://nannosfoodsdev.bitnamiapp.com/LookUpAllinv.php"
                    >All Inventory Items</a
                  >
                  <a
                    class="dropdown-item"
                    href="http://nannosfoodsdev.bitnamiapp.com/LookupLowInv.php"
                    >All Low Items
                  </a>
                  <a
                    class="dropdown-item"
                    href="http://nannosfoodsdev.bitnamiapp.com/LookUpReturns.php"
                    >All Returns
                  </a>
                  <a
                    class="dropdown-item"
                    href="http://nannosfoodsdev.bitnamiapp.com/LookUpCustPurchase.php"
                    >Completed Customer Purchase
                  </a>
                  <a
                    class="dropdown-item"
                    href="http://nannosfoodsdev.bitnamiapp.com/LookUpOrders.php"
                    >Paced Orders</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
customElements.define(
  "representative-navbar",
  component(RepresentativeNavbar, { useShadowDOM: false })
);
