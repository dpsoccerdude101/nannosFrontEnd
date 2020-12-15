import { html, component, useEffect } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
import { submitForm, checkLogin, login } from "../functions/functions.js";

export function EmployeeLogin() {
  useEffect(
    () =>
      checkLogin()
        ? useTitle("Employee Logged In")
        : useTitle("Employee Login"),
    [sessionStorage.userCredentials, []]
  );
  return html`${checkLogin()
    ? html` <div>You are already logged in.</div> `
    : html`<form
        @submit=${(e) => {
          submitForm(
            e,
            "https://www.nannosfoods.codes/empLoginJSONResponse.php"
          )
            .then((res) => res.json())
            .then((res) => JSON.parse(res))
            .then((obj) => {
              if (obj.login == "success") {
                login();
                navigateTo("/");
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
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />
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
      </form>`} `;
}
customElements.define(
  "employee-login",
  component(EmployeeLogin, { useShadowDOM: false })
);
