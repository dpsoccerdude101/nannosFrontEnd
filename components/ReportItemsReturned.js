import { html, component, useState, useEffect } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm } from "../functions/functions.js";

export function ReportItemsReturned() {
  useTitle("Lookup All Items Returned");

  //Populating VendorID Select Tag
  const[vendorIds, setVendorIds] = useState([]);
  useEffect(() => {
      fetch('https://www.nannosfoods.codes/populateItemsReturnedMike.php', {method: 'POST'})
      .then(response => {
          return response.json();
      })
      .then(data => {
        let vendorIds = data;
        setVendorIds(vendorIds);
      });
  }, []);
  //End of Vendor ID Select Logic
  return html`
    <form
      @submit=${(e) => {
        submitForm(
          e,
          "https://www.nannosfoods.codes/ReportItemsReturnedMikeJSONResponse.php"
        )
          .then((res) => res.json())
          .then((resp) => "" + JSON.stringify(resp) + "")
          .then((resp) => JSON.parse(resp))
          .then((obj) => {
            if (obj){
                sessionStorage.items = JSON.stringify(obj);
                navigateTo("/viewItemsReturned");
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
        <label> Select a Vendor ID: </label><br>
        <select size="5" className='form-control' name='VendorId' id='VendorId' required>
            ${vendorIds.map(id => html`<option value='${id.VendorId}'> ${id.VendorId}</option>`)}
        </select><br>
        <label> Select Item ID(s) (CTRL + Click for multiple) </label><br>
        <select size="5" className='form-control' name='ItemId' id='ItemId' multiple>
            ${vendorIds.map(id => html`<option value='${id.ItemId}'> ${id.ItemId}</option>`)}
        </select>
        <label> Select Item Categories) (CTRL + Click for multiple) </label><br>
        <select size="5" className='form-control' name='Category' id='Category' multiple>
            ${vendorIds.map(id => html`<option value='${id.Category}'> ${id.Category}</option>`)}
        </select>
        <br>
        <button type="submit">Lookup All Returns</button>
      </div>
    </form>
  `;
}

customElements.define(
  "report-items-returned",
  component(ReportItemsReturned, { useShadowDOM: false })
);