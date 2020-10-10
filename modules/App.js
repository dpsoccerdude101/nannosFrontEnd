import { html } from "https://unpkg.com/lit-html/lit-html.js";
import { component, useState } from "https://unpkg.com/haunted/haunted.js";
import { EmployeeLogin } from "./employeeLogin.js";
import { Navbar } from "./navbar.js";
import { RepresentativeNavbar } from "./representativeNavbar.js";

export function App() {
  const [wasLoginSuccesful, setWasLoginSuccesful] = useState();
  console.log(wasLoginSuccesful);

  //This uses the customElements api to let use our user-written components
  customElements.get("employee-login") ||
    customElements.define(
      "employee-login",
      component(EmployeeLogin, { useShadowDOM: false })
    );
  customElements.get("nav-bar") ||
    customElements.define(
      "nav-bar",
      component(Navbar, { useShadowDOM: false })
    );
  customElements.get("representative-navbar") ||
    customElements.define(
      "representative-navbar",
      component(RepresentativeNavbar, { useShadowDOM: false })
    );

  //Return our three html components
  return html`
    <nav-bar></nav-bar>
    <!-- This uses a ternary operator to conditionally render the representative drop
    down menu if the representative's login was succesful. -->
    ${wasLoginSuccesful
      ? html`<representative-navbar></representative-navbar>`
      : html`<employee-login
          @login=${(event) => {
            console.log(event);
            setWasLoginSuccesful(event.detail.login);
          }}
        ></employee-login>`}
    <!-- this is what is listening for that 'bubble up' of state -->
  `;
}
customElements.define("my-app", component(App, { useShadowDOM: false }));
