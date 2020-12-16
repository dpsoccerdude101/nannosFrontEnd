import { html, component, useState, useEffect } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm } from "../functions/functions.js";

export function CustomerPurchase() {
  useTitle("Purchase Made By Customer");

  //Populating Item Select Tag
  const[StoreIds, setStoreIds] = useState([]);
  useEffect(() => {
      fetch('https://www.nannosfoods.codes/populateCreateOrderStoresMike.php', {method: 'POST'})
      .then(response => {
          return response.json();
      })
      .then(data => {
        let StoreIds = data;
        setStoreIds(StoreIds);
      });
  }, []);
  //End of ItemID Select Logic
  return html`
    <form
      @submit=${(e) => {
        submitForm(
          e,
          "https://www.nannosfoods.codes/customerPurchaseMike.php"
        )
        .then((res) => res.json())
          .then((res) => JSON.parse(res))
          .then((obj) => {
            if (obj.result == "success") {
              console.dir(obj);
              navigateTo("/");
            } else {
              //Reset all input element's values.
              alert("This Store Does not have (enough of) this item in stock!");
            }
          })
          .catch((error) => alert(error));
      }}
    >
      <div className="container">
      <br>
        <label> Enter Customer ID </label><br>
        <input type="text" className='form-control' name="CustomerId" id="CustomerId" maxlength="9" required><br><br>

        <label> Select a Store </label><br>
        <select size="5" className='form-control' name='StoreId' id='StoreId' required>
            ${StoreIds.map(id => html`<option value='${id.StoreId}'> ${id.StoreName}</option>`)}
        </select><br><br>

        <label> Enter Item ID </label><br>
        <input type="text" className='form-control' name="ItemId" id="ItemId" maxlength="9" required><br><br>

        <label> Enter Quantity </label><br>
        <input type="text" className='form-control' name="QuantityPurchased" id="QuantityPurchased" maxlength="9" required><br><br>

        <button type="submit">Make Purchase</button>
      </div>
    </form>
  `;
}

customElements.define(
  "customer-purchase",
  component(CustomerPurchase, { useShadowDOM: false })
);