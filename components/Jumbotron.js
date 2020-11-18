import { html, component } from "haunted";
import { useTitle, navigateTo } from "haunted-router";

 export function Jumbotron() {
  useTitle("Home");
  return html`<!-- Jumbotron -->
<<<<<<< HEAD:Jumbotron.js
    <div class="jumbotron">
      <div class="jumbotron-container">
        <div class="jumbotron-welcome">Welcome!</div>
          <img class="stick-man" alt="Happy Nanno's stick figure customer pushing a shopping cart." src="img/nannos-stick-man.svg" />
      </div>
  </div>
=======
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
>>>>>>> 4bb2510d9568fe4c53fa95aeaa378c9c2585202f:components/Jumbotron.js
    <!-- End Jumbotron -->`;
}
customElements.define(
    "jumbo-tron",
    component(Jumbotron, { useShadowDOM: false })
  );