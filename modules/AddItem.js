import { html } from "https://unpkg.com/lit-html/lit-html.js";
import { component } from "https://unpkg.com/haunted/haunted.js";
import { getAllRequiredInputs } from "../functions/functions.js";

export function AddItem() {
  const submitForm = (e) => {
    const requiredInputs = getAllRequiredInputs(e);

    let obj = {};

    for (const input of requiredInputs) {
      input.reportValidity();
      obj = { ...obj, [input.name]: input.value };
      //obj == {"uname" : "Slavko", "psw": "Slavko123"}
    }

    fetch(
      "https://www.nannosfoodsdev.bitnamiapp.com/AddItemJSONResponseAdam.php",
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
          window.location.assign("../employeeMenu/");
        } else {
          //Reset all input element's values.
          e.target.reset();
          alert("Failed to Add");
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
        <label htmlFor="Description">
          <b>Description</b>
        </label>
        <input
          type="text"
          placeholder="Enter a Description"
          name="Description"
          required
        />
        <br />
        <label htmlFor="Size">
          <b>Size</b>
        </label>
        <input type="text" placeholder="Enter the Size" name="Size" required />
        <br />

        <label htmlFor="Division">
          <b>Division</b>
        </label>
        <input
          type="text"
          placeholder="Enter the Divison"
          name="Division"
          required
        />
        <br />

        <label htmlFor="Department">
          <b>Department</b>
        </label>
        <input
          type="text"
          placeholder="Enter the Department"
          name="Department"
          required
        />
        <br />

        <label htmlFor="Category">
          <b>Category</b>
        </label>
        <input
          type="text"
          placeholder="Enter the Category"
          name="Category"
          required
        />
        <br />

        <label htmlFor="ItemCost">
          <b>ItemCost</b>
        </label>
        <input
          type="text"
          placeholder="Enter the ItemCost"
          name="ItemCost"
          required
        />
        <br />

        <label htmlFor="ItemRetail">
          <b>ItemRetail</b>
        </label>
        <input
          type="text"
          placeholder="Enter the ItemRetail"
          name="ItemRetail"
          required
        />
        <br />

        <label htmlFor="ImageFileName">
          <b>ImageFileName</b>
        </label>
        <input
          type="text"
          placeholder="Enter The Name of the Image File"
          name="ImageFileName"
          required
        />
        <br />

        <label htmlFor="VenID">
          <b>VendorID</b>
        </label>
        <input
          type="text"
          placeholder="Enter the VendorId"
          name="VenId"
          required
        />
        <br />

        <button type="submit">Add</button>
      </div>
    </form>
  `;
}
customElements.define("add-item", component(AddItem, { useShadowDOM: false }));
