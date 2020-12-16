import { html, component, useEffect, useState } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm } from "../functions/functions.js";
import "jquery";

export const VendorDashboard = () => {
  const [items, setItems] = useState([]);
  useEffect(async () => {
    useTitle("Vendor Dashboard");
    let itemsReturned;
    const loginData = await history.state;
    console.log(JSON.stringify(loginData));
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
        alert("No Orders were found.");
      }
    } else alert("Error Code: " + response.status);
  }, []);

  return html`
    <div className="container">
      <br />
      <table id="example" class="table table-dark">
        <thead>
          <tr>
            <th>OrderId</th>
            <th>StoreName</th>
            <th>DateTimeOfOrder</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${items.map(
            (item) =>
              html`<tr style="cursor: pointer;"
                @click=${(e) => {
                  const orderId = e.target.parentElement.innerText.split(
                    /,?\s+/
                  )[0];
                  const data = '{ "OrderId":'+ orderId + ' }';
                  console.dir(data);
                  navigateTo("/viewOrderDetail", data);
                }}
              >
                ${Object.values(item).map((value) => html`<td>${value}</td>`)}
              </tr>`
          )}
        </tbody>
      </table>
      <button @click=${() => navigateTo("/")}>Done</button>
    </div>
  `;
};
customElements.define(
  "vendor-dashboard",
  component(VendorDashboard, { useShadowDOM: false })
);
