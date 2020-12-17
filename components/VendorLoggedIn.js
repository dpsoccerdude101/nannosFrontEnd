import { html, component } from "haunted";
import { useTitle} from "haunted-router";

export function VendorLoggedIn() {
  useTitle("Vendor Logged In");
  return html`
    <div>You are logged in as a vendor. To log in as a representative, please click Logout.</div>
  `;
}
customElements.define(
  "vendor-logged-in",
  component(VendorLoggedIn, { useShadowDOM: false })
);
