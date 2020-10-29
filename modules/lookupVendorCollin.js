import { html } from "https://unpkg.com/lit-html/lit-html.js";
import { component } from "https://unpkg.com/haunted/haunted.js";
import { getAllRequiredInputs } from "../functions/functions.js";

export function LookupVendor() {
  //This function makes the asynchronous call to submit the function
  /**
   *
   * @param {Event} e
   */
  const submitForm = (e) => {

    const requiredInputs = getAllRequiredInputs(e);

    let obj = {};

    for (const input of requiredInputs) {
      input.reportValidity();

     
      obj = { ...obj, [input.name]: input.value };
    }
console.dir(obj);
    fetch(
      "https://www.nannosfoodsdev.bitnamiapp.com/venModifyJSONResponseCollin.php",
      {
        method: "post",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(obj),
      }
    )
      .then((res) => res.json())
      .then((res) => JSON.parse(res))
      .then((obj) => {
        if (obj.result == "success") {
          alert(JSON.stringify(obj));
          //console.dir(obj);
          // recieve a JSON object from the PHP and send it to another
          // function to display the info in HTML???
          //window.location.assign("../modifyVendor/result.html");
        } else {
          //Reset all input element's values.
          e.target.reset();
          alert("No vendor was found.");
        }
      })
      .catch((error) => alert(error));
  };

  return html`
    <form
      @submit=${(e) => {
        e.preventDefault();
        submitForm(e);
      }}
    >
      <div className="container">
        <label htmlFor="VendorID">
          <b>Vendor ID</b>
        </label>
        <input
          type="text"
          placeholder="Enter Vendor ID"
          maxlength="9"
          pattern="[0-9]{1,9}"
          name="VendorID"
          required
        /><br />
        <button type="submit">Lookup Vendor</button>
      </div>
    </form>
  `;
}

customElements.define(
  "lookup-vendor",
  component(LookupVendor, { useShadowDOM: false })
);
