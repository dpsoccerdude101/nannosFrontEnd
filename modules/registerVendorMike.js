import { html } from "https://unpkg.com/lit-html/lit-html.js";
import { component } from "https://unpkg.com/haunted/haunted.js";
import { getAllRequiredInputs } from "../functions/functions.js";

export function RegisterVendor() {
  //This function makes the asynchronous call to submit the function.
  /**
   *
   * @param {Event} e
   */
  const submitForm = (e) => {
    //console.dir(e.target.querySelectorAll("input"));
    /**
     * Get all input elements from the form that have attribute 'required'
     * as a HTMLElementList
     */
    const requiredInputs = getAllRequiredInputs(e);

    /**
     * This is our javascript object that will hold our key-value pairs
     * of the keys 'uname' and 'psw', respectively
     */
    let obj = {};

    /**
     * This for loop iterates over the two input elements in the HTMLElementList
     * in the submitted form
     */
    for (const input of requiredInputs) {
      /**
       * We are using the HTML form validation explicitly in case
       * of somebody was sneaky and invoked this function without submitting the form.
       * Also, this lets us use custom HTML validation if we would like.
       */
      input.reportValidity();

      /**
       * This is terse.
       * obj (called by reference) = {obj (called by value).concatenate(input element's
       *  value of the name attribute (called by value) : input element's value of the
       * the value attribute (called by value))}
       */
      obj = { ...obj, [input.name]: input.value };
      //obj == {"uname" : "Slavko", "psw": "Slavko123"}
    }

    
  };

  return html`
    <form
      @submit=${(e) => {
        e.preventDefault();
        submitForm(e);
      }}
    >
      <div className="container">
        <label htmlFor="VendorCode">
          <b>Vendor Code</b>
        </label>
        <input type="text" placeholder="Enter Vendor Code"  pattern="[0-9]{1,9}" name="VendorCode" required /><br>
        <label htmlFor="VendorName">
          <b>Vendor Name</b>
        </label>
        <input type="text" placeholder="Vendor Name"  maxlength="20" name="VendorName" required /><br>
        <label htmlFor="Address">
          <b>Address</b>
        </label>
        <input type="text" placeholder="Address"  maxlength="30" name="Address" required /><br>
        <label htmlFor="City">
          <b>City</b>
        </label>
        <input type="text" placeholder="City"  maxlength="20" name="City" required /><br>
        <label htmlFor="Zip">
          <b>Zip</b>
        </label>
        <input type="text" placeholder="Zip Code"  pattern="[0-9]{5}" maxlength="5" name="Zip" required /><br>
        <label htmlFor="Phone">
          <b>Phone</b>
        </label>
        <input type="text" placeholder="Phone Number"  pattern="[0-9]{10}" maxlength="10" name="Phone" required /><br>
        <label htmlFor="ContactName">
          <b>Contact Name</b>
        </label>
        <input type="text" placeholder="Contact Name" maxlength="20" name="ContactName" required /><br>
        <button type="submit">Register Vendor</button>
      </div>
    </form>
  `;
}
customElements.define(
  "register-vendor",
  component(RegisterVendor, { useShadowDOM: false })
);
