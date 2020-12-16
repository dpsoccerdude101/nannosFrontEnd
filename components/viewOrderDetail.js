import { html, component, useEffect, useState } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm } from "../functions/functions.js";
import "jquery";

export const ViewOrderDetail = () => {
  const [items, setItems] = useState([]);

  useEffect(async () => {
    useTitle("View Order Detail");
    let itemsReturned;
    const orderData = await history.state;
    console.log(JSON.stringify(orderData));
    const response = await fetch(
      "https://www.nannosfoods.codes/viewVendorOrderDetailJSONResponse.php",
      {
        method: "POST",
        body: JSON.stringify(JSON.parse(orderData)),
      }
    );
    if (response.ok) {
      const responseJSON = await response.json();
      itemsReturned = JSON.parse("" + JSON.stringify(responseJSON) + "");
      if (itemsReturned) {
        setItems(itemsReturned);
        console.dir(itemsReturned);
      } else {
        alert("No Order was found.");
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
            <th>Description</th>
            <th>QuantityOrdered</th>
          </tr>
        </thead>
        <tbody>
          ${items.map(
            (item) =>
              html`<tr>
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
  "view-order-detail",
  component(ViewOrderDetail, { useShadowDOM: false })
);
