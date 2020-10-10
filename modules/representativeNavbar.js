import { html } from "https://unpkg.com/lit-html/lit-html.js";
import { component, useState } from "https://unpkg.com/haunted/haunted.js";

export function RepresentativeNavbar() {
  return html`
    <div role="group" class="btn-group">
      <div class="show dropdown">
        <button
          aria-haspopup="true"
          aria-expanded="true"
          type="button"
          class="dropdown-toggle btn btn-primary"
        >
          Manage Vendor
        </button>
        <div
          x-placement="bottom-start"
          aria-labelledby=""
          class="dropdown-menu show"
          style="position: absolute; top: 0px; left: 0px; margin: 0px; right: auto; bottom: auto; transform: translate(0px, 35px);"
          data-popper-reference-hidden="false"
          data-popper-escaped="false"
          data-popper-placement="bottom-start"
        >
          <a
            tag="[object Object]"
            to="./registerVendor.php"
            href="#"
            class="dropdown-item"
            role="button"
            >Register New</a
          ><a
            tag="[object Object]"
            to="./VendorModify.php"
            href="VendorModify.php"
            class="dropdown-item"
            role="button"
            >Modify Existing</a
          ><a
            tag="[object Object]"
            to="./deleteVendor.php"
            href="#"
            class="dropdown-item"
            role="button"
            >Remove Existing</a
          >
        </div>
      </div>
      <div class="dropdown">
        <button
          aria-haspopup="true"
          aria-expanded="false"
          type="button"
          class="dropdown-toggle btn btn-primary"
        >
          Manage Store
        </button>
      </div>
      <div class="dropdown">
        <button
          aria-haspopup="true"
          aria-expanded="false"
          type="button"
          class="dropdown-toggle btn btn-primary"
        >
          Manage Inventory
        </button>
      </div>
      <div class="dropdown">
        <button
          aria-haspopup="true"
          aria-expanded="false"
          type="button"
          class="dropdown-toggle btn btn-primary"
        >
          Manage Customer
        </button>
      </div>
      <div class="dropdown">
        <button
          aria-haspopup="true"
          aria-expanded="false"
          type="button"
          class="dropdown-toggle btn btn-primary"
        >
          Manage Order
        </button>
      </div>
      <div class="dropdown">
        <button
          aria-haspopup="true"
          aria-expanded="false"
          type="button"
          class="dropdown-toggle btn btn-primary"
        >
          Look Up
        </button>
      </div>
    </div>
  `;
}
