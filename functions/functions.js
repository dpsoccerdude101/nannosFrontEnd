import { html } from "haunted";
import { navigateTo } from "haunted-router";
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

/**
 *
 * @param {Storage} storage
 * @returns {boolean}
 */
export const checkLogin = () => {
  if (sessionStorage.userCredentials) {
    return JSON.parse(sessionStorage.userCredentials).loggedIn == "true";
  }
  return false;
};

/**
 *
 * @param {Storage} storage
 * @returns {boolean}
 */
export const checkVendorLogin = () => {
  if (sessionStorage.vendorCredentials) {
    return JSON.parse(sessionStorage.vendorCredentials).loggedIn == "true";
  }
  return false;
};

/**
 * @description Logs Vendor In
 */
export const vendorLogin = () => {
  if (checkLogin()) { logout(); }
  sessionStorage.vendorCredentials = JSON.stringify({
    loggedIn: "true",
  });
};

/**
 * @description Logs Employee In
 */
export const login = () => {
  if (checkVendorLogin()) { logout(); }
  sessionStorage.userCredentials = JSON.stringify({
    loggedIn: "true",
  });
};

/**
 * @description Logs Employee Out
 */
export const logout = () => {
  sessionStorage.userCredentials = JSON.stringify({
    loggedIn: "false",
  });
  sessionStorage.vendorCredentials = JSON.stringify({
    loggedIn: "false",
  });
};

/**
 *
 * @param {StateUpdater<any[]>} setOrder
 * @param {Array} order
 * @param {Number} index
 */
export const deleteItem = (setOrder, order, index) => {
  setOrder(() => {
    let tempOrder = [...order];
    tempOrder.splice(index, 1);
    return tempOrder;
  });
};

/**
 *
 * @param {Number} value
 * @param {StateUpdater<any[]>} setOrder
 * @param {Array} order
 * @param {Number} index
 * @param {Object} item
 */
export const modQuantity = (value, setOrder, order, index, item) => {
  setOrder(() => {
    let tempOrder = [...order];
    tempOrder.splice(index, 1, {
      ...item,
      quantity: value,
    });
    return tempOrder;
  });
};

/**
 * @returns {HTMLTemplateElement}
 * @description 404 Page
 */
export const errorPage = html`<div class="pageNotFound"></div>`;
export const fetchOrderStores = async () => {
  const response = await fetch(
    "https://www.nannosfoods.codes/populateCreateOrderStoresMike.php",
    {
      method: "POST",
    }
  );
  const storeNames = await response.json();
  return storeNames;
};
export const fetchOrderVendors = async () => {
  const response = await fetch(
    "https://www.nannosfoods.codes/populateCreateOrderVendorsMike.php",
    {
      method: "POST",
    }
  );
  const vendorNames = await response.json();
  return vendorNames;
};
export const fetchOrderItems = async () => {
  const response = await fetch(
    "https://www.nannosfoods.codes/populateCreateOrderItemsMike.php",
    {
      method: "POST",
    }
  );
  const orderItems = await response.json();
  return orderItems;
};

export const submitOrder = async (order, selectedStoreID) => {
  const modOrder = order.map((item) => {
    return { ...item, StoreId: selectedStoreID };
  });
  console.dir(modOrder);
  const response = await fetch(
    "https://www.nannosfoods.codes/CreateOrder.php",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(modOrder),
    }
  );
  if (response.ok) {
    const responseJSON = await response.json();
    const message = JSON.parse(responseJSON);
    if (message.result == "success") navigateTo("/");
    else alert("Insert Failed. " + message.result);
  } else alert("Error Code: " + response.status);
};

/**
 *
 * @param {Event} e
 * @param {URL} apiEndpoint
 * @description This function makes the asynchronous call to submit the function.
 */
export const submitForm = (e, apiEndpoint) => {
  e.preventDefault();
  const requiredInputs = getAllRequiredInputs(e);
  const selects = getAllRequiredSelectInputs(e);
  const multipleSelects = getAllMultipleSelectInputs(e);
  let obj = {};
  for (const input of multipleSelects) {
    const multipleSelectsValues = [];
    for (const val of input) {
      if (val.selected == true) {
        multipleSelectsValues.push(val.value);
      }
    }
    obj = { ...obj, [input.name]: multipleSelectsValues };
  }
  for (const input of selects) {
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
