import { html } from "https://unpkg.com/lit-html/lit-html.js";
import { component } from "https://unpkg.com/haunted/haunted.js";
import { submitForm } from "/functions/functions.js";

export function DeleteMember() {
  return html`
    <form
      @submit=${(e) => {
        submitForm(
          e,
          "https://www.nannosfoods.codes/deleteMemberJSONResponseMike.php"
        )
          .then((res) => res.json())
          .then((res) => JSON.parse(res))
          .then((obj) => {
            if (obj.result == "success") {
              console.dir(obj);
              window.location.assign("/pages/employeeMenu/");
            } else {
              //Reset all input element's values.
              e.target.reset();
              alert("Deletion Failed.");
            }
          })
          .catch((error) => alert(error));
      }}
    >
      <div className="container">
        <label htmlFor="MemberID">
          <b>Member ID</b>
        </label>
        <input
          type="text"
          placeholder="Enter Member ID"
          maxlength="9"
          pattern="[0-9]{1,9}"
          title="Please Enter a numeric ID"
          name="MemberID"
          required
        /><br />
        <button type="submit">Delete Member</button>
      </div>
    </form>
  `;
}
customElements.define(
  "delete-member",
  component(DeleteMember, { useShadowDOM: false })
);
