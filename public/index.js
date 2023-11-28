"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const error = urlParams.get("error");

  if (error === "emailInUse") {
    alert(
      "Email address is already in use. Please use a different email."
    );
  }
});