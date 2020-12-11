// transfers sessionStorage from one tab to another
//Instantly Invoked Function (Singleton)
(() => {
  const sessionStorageTransfer = (event = window.event) => {
    if (!event.newValue) return; // do nothing if no value to work with
    if (event.key == "getSessionStorage") {
      // another tab asked for the sessionStorage -> send it
      localStorage.setItem("sessionStorage", JSON.stringify(sessionStorage));
      // the other tab should now have it, so we're done with it.
      localStorage.removeItem("sessionStorage"); // <- could do short timeout as well.
    } else if (event.key == "sessionStorage" && !sessionStorage.length) {
      // another tab sent data <- get it
      let data = JSON.parse(event.newValue);
      for (let key in data) {
        sessionStorage.setItem(key, data[key]);
      }
    }
  };
  // listen for changes to localStorage
  window.addEventListener("storage", sessionStorageTransfer, false);

  // Ask other tabs for session storage (this is ONLY to trigger event)
  if (!sessionStorage.length) {
    localStorage.setItem("getSessionStorage", "foobar");
    localStorage.removeItem("getSessionStorage", "foobar");
  }
})();
