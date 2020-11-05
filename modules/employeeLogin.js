import { html } from "https://unpkg.com/lit-html/lit-html.js";
import { component } from "https://unpkg.com/haunted/haunted.js";
import { submitForm } from "../functions/functions.js";

export function EmployeeLogin() {
  return html`
    <form
      @submit=${(e) => {
        submitForm(
          e,
          "https://www.nannosfoodsdev.bitnamiapp.com/empLoginJSONResponse.php"
        )
          .then((res) => res.json())
          .then((res) => JSON.parse(res))
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
