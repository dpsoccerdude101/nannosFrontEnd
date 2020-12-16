import { html, component, useEffect, useState } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm } from "../functions/functions.js";

export const VendorDashboard = () => {
  const [items, setItems] = useState([]);

  useEffect(async () => {
    useTitle("Vendor Dashboard");
    let itemsReturned;
    const loginData = await history.state;
    console.log(JSON.stringify(loginData))
    const response = await fetch(
      "https://www.nannosfoods.codes/viewVendorOrdersJSONResponse.php",
      {
        method: "POST",
        body: JSON.stringify(JSON.parse(loginData)),
      }
    );
    if (response.ok) {
      const responseJSON = await response.json();
      itemsReturned = JSON.parse("" + JSON.stringify(responseJSON) + "");
       if (itemsReturned) {
        setItems(itemsReturned);
        console.dir(itemsReturned);
      } else {
        alert("No Vendor was found.");
      } 
    } else alert("Error Code: " + response.status);
  }, []);
  
  
  return html`
    <div className="container">
      <br />
      <table class="table table-dark">
        <tr>
          <th>OrderId</th>
          <th>StoreName</th>
          <th>DateTimeOfOrder</th>
          <th>Status</th>
        </tr>
        ${items.map(
          (item) =>
            html`<tr>
              ${Object.values(item).map((value) => html`<td>${value}</td>`)}
            </tr>`
        )}
      </table>
      <button @click=${() => navigateTo("/")}>Done</button>
    </div>
  `;
};
customElements.define(
  "vendor-dashboard",
  component(VendorDashboard, { useShadowDOM: false })
);
