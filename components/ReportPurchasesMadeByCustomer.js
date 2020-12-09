import { html, component, useState, useEffect } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm } from "../functions/functions.js";

export function ReportPurchases() {
  useTitle("Lookup All Purchases Made By Customer");

  //Populating Item Select Tag
  const[ItemIds, setItemIds] = useState([]);
  useEffect(() => {
      fetch('https://www.nannosfoods.codes/populatePurchasesMadeByCustomerMike.php', {method: 'POST'})
      .then(response => {
          return response.json();
      })
      .then(data => {
        let ItemIds = data;
        setItemIds(ItemIds);
      });
  }, []);
  //End of ItemID Select Logic
  return html`
    <form
      @submit=${(e) => {
        submitForm(
          e,
          "https://www.nannosfoods.codes/ReportPurchasesMadeByCustomerMikeJSONResponse.php"
        )
          .then((res) => res.json())
          .then((resp) => "" + JSON.stringify(resp) + "")
          .then((resp) => JSON.parse(resp))
          .then((obj) => {
            if (obj){
                sessionStorage.items = JSON.stringify(obj);
                navigateTo("/viewAllPurchasesMadeByCustomer");
            } else {
              //Reset all input element's values.
              e.target.reset();
              alert("No Item was found.");
            }
          })
          .catch((error) => alert(error));
      }}
    >
      <div className="container">
      <br>
        <label> Select an Item ID: </label><br>
        <select size="5" className='form-control' name='ItemId' id='ItemId' required>
            ${ItemIds.map(id => html`<option value='${id.ItemId}'> ${id.ItemId}</option>`)}
        </select><br>
        <label>StartDate</label>
        <input type="date" id="StartDate" name="StartDate" required>
        <br>
        <label>EndDate</label>
        <input type="date" id="EndDate" name="EndDate" required>
        <br>
        <button type="submit">Lookup Purchases </button>
      </div>
    </form>
  `;
}

customElements.define(
  "report-purchases",
  component(ReportPurchases, { useShadowDOM: false })
);