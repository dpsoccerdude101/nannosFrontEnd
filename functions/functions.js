/**
 *
 * @param {Event} e
 * @return {NodeListOf<HTMLInputElement>}
 */
export const getAllRequiredInputs = (e) => {
    return e.target.querySelectorAll("input[required]");
  };