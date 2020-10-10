import { html } from "https://unpkg.com/lit-html/lit-html.js";
import {
  component,
  useState,
  useEffect,
} from "https://unpkg.com/haunted/haunted.js";
import { getAllRequiredInputs } from "../functions/functions.js";

export function EmployeeLogin() {
  //loginSuccess holds state of login,
  //setLoginSuccess is setter for that state
  const [loginSuccess, setLoginSuccess] = useState();

  //This is function that dispatches a custom event
  //so that state can move up the DOM tree
  //That is why 'bubbles' is set to true
  //and detail 'bubbles up' the state of the application
  const login = () => {
    const event = new CustomEvent("login", {
      bubbles: true,
      detail: { login: loginSuccess },
    });
    this.dispatchEvent(event);
  };

  //useEffect means that the login function is only invoked
  //when there are any changes made to loginSuccess (its dependancy)
  useEffect(() => {
    login();
  }, [loginSuccess]);

  //This function makes the asynchronous call to submit the function
  /**
   *
   * @param {Event} e
   */
  const submitForm = (e) => {
    console.dir(e.target.querySelectorAll("input"));
    const requiredInputs = getAllRequiredInputs(e);
    let obj = {};
    for (const input of requiredInputs) {
      input.reportValidity();
      //obj = whatever the object previously has + a key, value pair  of [input.name]: input value
      //if obj == {"uname" : "Slavko"}
      obj = { ...obj, [input.name]: input.value };
      //obj == {"uname" : "Slavko", "psw": "Slavko123"}
    }
    console.dir(obj);
    fetch("http://nannosfoods.bitnamiapp.com//empLoginJSONResponse.php", {
      method: "post",
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((res) => JSON.parse(res))
      .then((obj) => {
        console.log(typeof obj);
        console.dir(obj);

        if (obj.login == "success") setLoginSuccess(true);
        else setLoginSuccess(false);
      })
      .catch((error) => console.log(error));
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
