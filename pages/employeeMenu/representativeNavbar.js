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
          href="/pages/registerVendor"
          >Register New</a
        >
        <a
          class="dropdown-item"
          href="/"
          >Modify Existing</a
        >
        <a
          class="dropdown-item"
          href="/pages/deleteVendor"
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
            href="/pages/AddStore"
            >Add New Store</a
          >
          <a
            class="dropdown-item"
            href="/"
            >Modify Existing</a
          >
          <a
            class="dropdown-item"
            href="/"
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
              href="/pages/AddItem/"
              >Add New Item</a
            >
            <a
              class="dropdown-item"
              href="/"
              >Modify Existing</a
            >
            <a
              class="dropdown-item"
              href="/"
              >Remove Existing</a
            >
            <a
              class="dropdown-item"
              href="/"
              >Process Delivery</a
            >
            <a
              class="dropdown-item"
              href="/"
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
                href="/"
                >Add New Member</a
              >
              <a
                class="dropdown-item"
                href="/"
                >Modify Member</a
              >
              <a
                class="dropdown-item"
                href="/"
                >Remove Member</a
              >
              <a
                class="dropdown-item"
                href="/"
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
                  href="/"
                  >New Order</a
                >
                <a
                  class="dropdown-item"
                  href="/"
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
                    href="/"
                    >All Inventory Items</a
                  >
                  <a
                    class="dropdown-item"
                    href="/"
                    >All Low Items
                  </a>
                  <a
                    class="dropdown-item"
                    href="/"
                    >All Returns
                  </a>
                  <a
                    class="dropdown-item"
                    href="/"
                    >Completed Customer Purchase
                  </a>
                  <a
                    class="dropdown-item"
                    href="/"
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
