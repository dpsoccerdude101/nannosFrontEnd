import { html, component } from "haunted";
import { useTitle, navigateTo } from "haunted-router";

 export function Jumbotron() {
  useTitle("Home");
  return html`<!-- Jumbotron -->
    <div class="jumbotron">
      <div class="jumbotron-container">
        <div class="jumbotron-welcome">Welcome!</div>
        <div class="nannos-stick-man"></div>
      </div>
    </div>
    <!-- End Jumbotron -->`;
}
customElements.define(
    "jumbo-tron",
    component(Jumbotron, { useShadowDOM: false })
  );