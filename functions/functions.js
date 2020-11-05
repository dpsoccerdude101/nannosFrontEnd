/**
 *
 * @param {Event} e
 * @return {NodeListOf<HTMLInputElement>}
 */
export const getAllRequiredInputs = (e) => {
  return e.target.querySelectorAll("input[required]");
};

//This function makes the asynchronous call to submit the function.
/**
 *
 * @param {Event} e
 */
export const submitForm = (e, apiEndpoint) => {
  e.preventDefault();
  const requiredInputs = getAllRequiredInputs(e);
  let obj = {};
  for (const input of requiredInputs) {
    input.reportValidity();
    obj = { ...obj, [input.name]: input.value };
  }
  return fetch(apiEndpoint, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(obj),
  });
};
