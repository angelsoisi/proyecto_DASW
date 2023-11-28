"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const error = urlParams.get("error");

  if (error === "invalidCredentials") {
    alert("Invalid email or password. Please try again.");
  }
});