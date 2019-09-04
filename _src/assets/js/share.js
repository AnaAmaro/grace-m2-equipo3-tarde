/* eslint-disable strict */
function showURL(data) {
  if (data.success) {
    // Show URL card
    urlCard.innerHTML =
      '<h3 class="created_card_h3">La tarjeta ha sido creada:</h3> <a class="created_card_small" target="_blank" href=' +
      data.cardURL +
      ">" +
      data.cardURL +
      "</a>";

    // Update twitter button URL
    const twitterButton = document.querySelector(".js-button-twitter");
    twitterButton.href = `https://twitter.com/intent/tweet?text=Mira mi tarjeta de visita ${data.cardURL}`;
  } else {
    urlCard.innerHTML = "ERROR:" + data.error;
  }
}

// Función que llama a la API y le pasa en el BODY el JSON previamente transformado con los valores del formulario.
function sendRequest(json) {
  fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
    method: "POST",
    body: JSON.stringify(json),
    headers: {
      "content-type": "application/json"
    }
  })
    .then(function(resp) {
      return resp.json();
    })
    .then(function(result) {
      showURL(result);
    })
    .catch(function(error) {
      console.log(error);
    });
}

//Función que es llamada después del loadPhoto y envía los valores JSON a la función que llama a la API.
function sendData() {
  // let inputs = Array.from(form.elements);
  // let json = getJSONFromInputs(inputs);
  // json.photo = fr.result || JSON.parse(localStorage);
  let json = JSON.parse(localStorage.getItem('userData'));
  sendRequest(json);
}

//Cambiar esto!

function changeButtonColor() {
  if (
    nameInput.value &&
    jobInput.value &&
    emailInput.value &&
    linkedinInput.value &&
    githubInput.value &&
    photo.src
  ) {
    //if (nameInput.value && jobInput.value && emailInput.value && linkedinInput.value && githubInput.value && browse.value) {
    buttonShare.style.background = "#e17334";
  } else {
    buttonShare.style.background = "lightgrey";
  }
}

//Cambiar esto!

