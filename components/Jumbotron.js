import { html, component } from "haunted";
import { useTitle, navigateTo } from "haunted-router";

 export function Jumbotron() {
  useTitle("Home");
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
        <a is="router-link" class="btn btn-primary btn-lg" href="/" role="button"
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