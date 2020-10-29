import { html } from "https://unpkg.com/lit-html/lit-html.js";
import { component } from "https://unpkg.com/haunted/haunted.js";

export function Jumbotron() {
  return html`<!-- Jumbotron -->
    <div style="background: transparent !important" class="jumbotron">
    <div class="logo">
      <img id="stick-man" src="img/nannos-stick-man.svg" alt="Nanno's">
      <p class="brush-hand">
        Taste the Nanno-ness!
      </p>
      </div>
      <hr class="my-4" />
      <p>Click the button below to learn more about our store</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="aboutUs.php" role="button"
          >Learn more</a
        >
      </p>
    </div>
    <!-- End Jumbotron -->`;
}
customElements.define(
    "jumbo-tron",
    component(Jumbotron, { useShadowDOM: false })
  );