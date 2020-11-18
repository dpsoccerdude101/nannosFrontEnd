import { html, component } from "haunted";
import { useTitle, navigateTo } from "haunted-router";
//import "../images/404.png"

export function FourZeroFour() {
  useTitle("Not Found");
  return html` <div class="pageNotFound"></div> `;
}
customElements.define(
  "four-zero-four",
  component(FourZeroFour, { useShadowDOM: false })
);
