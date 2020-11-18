import { html, component } from "haunted";
import { useTitle} from "haunted-router";

export function EmployeeLoggedIn() {
  useTitle("Employee Logged In");
  return html`
    <div>You are already logged in.</div>
  `;
}
customElements.define(
  "employee-logged-in",
  component(EmployeeLoggedIn, { useShadowDOM: false })
);
