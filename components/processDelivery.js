import { html, component } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm } from "../functions/functions.js";

export function ProcessDelivery() {
  useTitle("Process A Delivery");
  return html`
    <form
      @submit=${(e) => {
        submitForm(
          e,
          "https://www.nannosfoods.codes/processDeliveryMike.php"
        )
          .then((res) => res.json())
          .then((res) => JSON.parse(res))
          .then((obj) => {
            if (obj.result == "success") {
              navigateTo("/");
            } else {
              e.target.reset();
              console.dir(obj);
              console.log(obj.result);
              alert("Failed to process delivery, either the order has already been completed or the order ID entered does not exist");
            }
          })
          .catch((error) => alert(error));
      }}
    >
      <div className="container">
        <label>OrderID: </label><br />
        <input type="number" name="OrderId" id="OrderId" @change=${(e) => e.target.value<1? e.target.value = 1 : ''} min="1" required/>
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
