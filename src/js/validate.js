function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  event.preventDefault();
  const lat = Number(document.querySelector("#latitude").value);
  const long = Number(document.querySelector("#longitude").value);

  if (lat < -90 || lat > 90) {
    const text = document.querySelector(".location-lat");
    text.innerHTML = "* must be a valid number between -90 and 90";
  }

  if (long < -180 || long > 180) {
    const text = document.querySelector(".location-lng");
    text.innerHTML = "* must be a valid number between -180 and 180";
  }

  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.

  console.log(
    "TODO - validate the longitude, latitude values before submitting"
  );
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector(".val-form");
  form.onsubmit = validate;
};
