import { html, component, useEffect } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm } from "../functions/functions.js";

export function ProcessDelivery() {
  useEffect(() => useTitle("Process A Delivery"), []);
  return html`
    <form
      @submit=${async (e) => {
        const response = await submitForm(
          e,
          "https://www.nannosfoods.codes/processDeliveryMike.php"
        );
        if (response.ok) {
          const responseJSON = await response.json();
          const message = JSON.parse(responseJSON);
          if (message.result == "success") navigateTo("/");
          else
            alert(
              "Failed to process delivery, either the order has already been completed or the order ID entered does not exist"
            );
        } else alert("Error Code: " + response.status);
      }}
    >
      <div className="container">
        <label>OrderID: </label><br />
        <input type="number" name="OrderId" id="OrderId" min="1" required />
        <br />
        <button type="submit">Process Delivery</button>
      </div>
    </form>
  `;
}
customElements.define(
  "process-delivery",
  component(ProcessDelivery, { useShadowDOM: false })
);
