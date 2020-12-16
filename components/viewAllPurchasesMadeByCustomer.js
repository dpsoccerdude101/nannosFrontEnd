import { html, component } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm } from "../functions/functions.js";

export function ViewAllPurchases() {
  useTitle("View All Purchases");
  try {
  const itemTemplates = [];
  JSON.parse(sessionStorage.items).map((item) => {
    itemTemplates.push(html`<tr>`);
    Object.values(item).forEach((val) => {
      itemTemplates.push(html`<td>${val}</td>`);
    },
    itemTemplates.push(html`</tr>`)
  )});
  return html`
    <form
      @submit=${(e) => {
        e.preventDefault();
        navigateTo("/");        
      }}
    >
      <div className="container"><br />
        <table class="table table-dark">
          <tr>
            <th>ItemId</th>
            <th>StoreName</th>
            <th>CustomerName</th>
          </tr>
          ${itemTemplates}
        </table>
        <button type="submit">Done</button>
      </div>
    </form>
  `;} catch {
      return html`
      <p>No Values Matched Your search</p>
    `; 
  }
}
customElements.define(
  "view-all-purchases",
  component(ViewAllPurchases, { useShadowDOM: false })
);