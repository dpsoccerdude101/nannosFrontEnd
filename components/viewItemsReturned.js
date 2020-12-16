import { html, component } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm } from "../functions/functions.js";

export function ViewItemsReturned() {
  useTitle("View All Items Returned");
  const itemTemplates = [];
  try {
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
            <th>StoreName</th>
            <th>ItemId</th>
            <th>DateTimeOfReturn</th>
            <th>QuantityReturned</th>
          </tr>
          ${itemTemplates}
        </table>
        <button type="submit">Done</button>
      </div>
    </form>
  `;
    } catch {
        return html`
        <p>No Values Matched Your search</p>
      `; 
    }
   }
customElements.define(
  "view-items-returned",
  component(ViewItemsReturned, { useShadowDOM: false })
);