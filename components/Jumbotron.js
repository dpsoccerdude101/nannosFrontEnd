import { html, component } from "haunted";
import { useTitle, navigateTo } from "haunted-router";

 export function Jumbotron() {
  useTitle("Home");
  return html`<!-- Jumbotron -->
    <div style="background: transparent !important" class="jumbotron">
      <h1 class="display-4">Welcome to Nanno's Foods!</h1>
      <p class="lead">
        Nanno's Foods is a family owned grocery store with an abundant selection
        of foods and other products.
      </p>
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