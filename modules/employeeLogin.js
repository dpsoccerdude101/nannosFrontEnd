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

    /**
     * fetch is the api that Javascript gives us to send http requests easily.
     * Fetch uses AJAX in the background to make the http request.
     * The first argument in fetch is the URL of the API endpoint.
     * The second argument in fetch is an object that describes what kind
     * of http request we'd like to make (POST) and what type of content we are sending
     * over (JSON)
     */
    fetch("http://nannosfoodsdev.bitnamiapp.com//empLoginJSONResponse.php", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      /**
     * This architecture might seem unusual. This is called a Javascript promise.
     * Basically, the .then() waits for the response from the server and then passes
     * that as an argument into the next function.
     * 
     * You could rewrite this code like so:
     * .then(function(res1) {return res1.json()})
     * .then(function(res2) {return JSON.parse(res2)})
     * .then(function(res3) {
     *    if (res3.login == "success") {
          window.location.assign("../employeeMenu/");
          //setLoginSuccess(true);
        } else {
          alert("Login Failed. Try a different username or password.");
          //setLoginSuccess(false);
        }
     * })
     */
      /**
       * This first .then() returns the body of the response from
       * the server as a promise
       */
      .then((res) => res.json())
      /**
       * This second .then() parse the body of the response for a
       * JavaScript Object Notation (JSON) string and converts it into
       * a Javascript object and returns the object.
       */
      .then((res) => JSON.parse(res))
      /**
       * This last .then() checks if the value at the key of 'login' is "success"
       * if so, it loads the employeeMenu html. If not, it alerts the user that there
       * was a failure to login.
       */
      .then((obj) => {
        if (obj.login == "success") {
          window.location.assign("../employeeMenu/");
        } else {
          //Reset all input element's values.
          e.target.reset();
          alert("Login Failed. Try a different username or password.");
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
