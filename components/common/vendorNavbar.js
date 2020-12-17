import { html, component } from "haunted";
import { useTitle, navigateTo } from "haunted-router";

export function VendorNavbar() {
  return html`
    <div class="btn-group">
      <button
        type="button"
        class="btn btn-info dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Testing
      </button>
      <div class="dropdown-menu">
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
  "vendor-navbar",
  component(VendorNavbar, { useShadowDOM: false })
);
