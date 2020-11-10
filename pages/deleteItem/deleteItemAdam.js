import { html } from "https://unpkg.com/lit-html/lit-html.js";
import { component } from "https://unpkg.com/haunted/haunted.js";
import { getAllRequiredInputs } from "../../functions/functions.js";

export function DeleteItem() {
  //This function makes the asynchronous call to submit the function.
  /**
   *
   * @param {Event} e
   */
  const submitForm = (e) => {
    const requiredInputs = getAllRequiredInputs(e);

    let obj = {};

    for (const input of requiredInputs) {
      input.reportValidity();

      obj = { ...obj, [input.name]: input.value };
    }

    fetch(
      "https://www.nannosfoodsdev.bitnamiapp.com/deleteItemJSONResponseAdam.php",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(obj),
      }
    )
      .then((res) => res.json())
      .then((res) => JSON.parse(res))
      .then((obj) => {
        if (obj.result == "success") {
          console.dir(obj);
          window.location.assign("../employeeMenu/");
        } else {
          //Reset all input element's values.
          e.target.reset();
          alert("Deletion Failed.");
        }
      })
      .catch((error) => alert(error));
  };

  return html`
    <form
      @submit=${(e) => {
        e.preventDefault();
        submitForm(e);
      }}
    >
      <div className="container">
        <label htmlFor="ItemID">
          <b>Item ID</b>
        </label>
        <input
          type="text"
          placeholder="Enter Item ID"
          maxlength="9"
          pattern="[0-9]{1,9}"
          name="ItemID"
          required
        /><br />
        <button type="submit">Delete Item</button>
      </div>
    </form>
  `;
}
customElements.define(
  "delete-Item",
  component(DeleteItem, { useShadowDOM: false })
);