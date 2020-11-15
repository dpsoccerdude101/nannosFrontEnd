import { html } from "https://unpkg.com/lit-html/lit-html.js";
import { component } from "https://unpkg.com/haunted/haunted.js";

export function Jumbotron() {
  return html`<!-- Jumbotron -->
    <div class="jumbotron">
      <div class="jumbotron-container">
        <div class="jumbotron-welcome">Welcome!</div>
          <img class="stick-man" alt="Happy Nanno's stick figure customer pushing a shopping cart." src="img/nannos-stick-man.svg" />
      </div>
  </div>
    <!-- End Jumbotron -->`;
}
customElements.define(
    "jumbo-tron",
    component(Jumbotron, { useShadowDOM: false })
  );