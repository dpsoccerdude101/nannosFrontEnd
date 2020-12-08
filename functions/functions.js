/**
 *
 * @param {Event} e
 * @return {NodeListOf<HTMLInputElement>}
 */
export const getAllRequiredInputs = (e) => {
  return e.target.querySelectorAll("input[required]");
};
/**
 * 
 * @param {Event} e
 * @return {NodeListOf<HTMLSelectElement>}
 */
export const getAllRequiredSelectInputs = (e) => {
  return e.target.querySelectorAll("select[required]");
};

/**
 * 
 * @param {Event} e
 * @return {NodeListOf<HTMLSelectElement>}
 */
export const getAllMultipleSelectInputs = (e) => {
  return e.target.querySelectorAll("select[multiple]");
};

//This function makes the asynchronous call to submit the function.
/**
 *
 * @param {Event} e
 */
export const submitForm = (e, apiEndpoint) => {
  e.preventDefault();
  const requiredInputs = getAllRequiredInputs(e);
  const selects = getAllRequiredSelectInputs(e);
  const multipleSelects = getAllMultipleSelectInputs(e);
  let obj = {};
  for(const input of multipleSelects) {
    const multipleSelectsValues = [];
    for(const val of input) {
      if(val.selected == true){
        multipleSelectsValues.push(val.value);
      }
    }
    obj = { ...obj, [input.name]: multipleSelectsValues };
  }
  for(const input of selects) {
    obj = { ...obj, [input.name]: input.value };
  }
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
