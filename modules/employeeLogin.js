import { html } from "https://unpkg.com/lit-html/lit-html.js";
import { component } from "https://unpkg.com/haunted/haunted.js";
import { getAllRequiredInputs } from "../functions/functions.js";

export function EmployeeLogin() {
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
        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" name="uname" required />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />
        <button type="submit">Login</button>
      </div>
    </form>
  `;
}
customElements.define(
  "employee-login",
  component(EmployeeLogin, { useShadowDOM: false })
);
