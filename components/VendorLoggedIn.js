import { html, component } from "haunted";
import { useTitle} from "haunted-router";

export function VendorLoggedIn() {
  useTitle("Vendor Logged In");
  return html`
    <div>You are already logged in.</div>
  `;
}
customElements.define(
  "vendor-logged-in",
  component(VendorLoggedIn, { useShadowDOM: false })
);
