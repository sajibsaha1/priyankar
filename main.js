// For Right click disable.
window.addEventListener(
  "contextmenu",
  function (e) {
    e.preventDefault();
    alert("Right-click is not allowed on this page");
  },

  false
);
