import { html, component } from "haunted";
import { useTitle} from "haunted-router";

export function EmployeeLoggedIn() {
  useTitle("Employee Logged In");
  return html`
    <div>You are logged in as an employee. To log in as a vendor, please click Logout.</div>
  `;
}
customElements.define(
  "employee-logged-in",
  component(EmployeeLoggedIn, { useShadowDOM: false })
);
