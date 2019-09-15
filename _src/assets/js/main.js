"use strict";

//constantes

const buttonShare = document.querySelector(".share__btn");

// autopreview function

autoPreview(".js-input-name", ".preview__bio--name", "Nombre Apellido");
autoPreview(".js-input-job", ".preview__bio--job", "Front-end developer");

function autoPreview(variableinput, variableoutput, defaultValue) {
  const outputText = document.querySelector(variableoutput);
  const inputText = document.querySelector(variableinput);

  function changePara(event) {
    const inputValue = event.currentTarget;
    if (inputText.value) {
      outputText.innerHTML = inputValue.value;
    } else {
      outputText.innerHTML = defaultValue;
    }
  }
  inputText.addEventListener("keyup", changePara);
}


// CREAR ENLACE DE CARD
const form = document.querySelector("form");
// Creo un objeto File Reader
const fr = new FileReader();
// Agarro el espacio donde se va a pintar la URL con la tarjeta generada
const urlCard = document.querySelector(".created_card_small");

//Función que coge la foto y la transforma en formato correcto para el JSON
function loadPhoto(ev) {
  ev.preventDefault();
  let myPhoto = document.querySelector(".js-form__photo").files[0];
  if (myPhoto) {
    fr.addEventListener("load", sendData);
    fr.readAsDataURL(myPhoto);
  } else {
    sendData();
  }
}

// function loadPalette(ev) {
//   ev.preventDefault();

//   fr.readAsDataURL(createPaletteSelectorFunction);
// }

// function loadPalette(ev) {
//   ev.preventDefault();

//   fr.readAsDataURL(createPaletteSelectorFunction);
// }

// Función que transforma los valores del formulario en JSON excepto los botones.
// function getJSONFromInputs(inputs) {
//   return inputs.reduce(function(acc, input) {
//     if (input.getAttribute("type") === "radio") {
//       if (input.checked === true) {
//         acc[input.name] = input.value;
//       }
//     } else if (input.nodeName !== "BUTTON") {
//       acc[input.name] = input.value;
//     }
//     return acc;
//   }, {});

//Modificaciones: el Div final comentado de "landing_main" se tiene que descomentar, en el fillin_form el name: comepleteName pasa a ser name: name.
// icon changes with info

function changeIconColor(variableinput, classInput, classIcon) {
  const classIconUsed = document.querySelector(classIcon);
  const inputText = document.querySelector(variableinput);

  const handle = function() {
    if (inputText.value) {
      classIconUsed.style.color = "#114e4e";
    } else {
      classIconUsed.style.color = "lightgrey";
    }
  };
  document.querySelector(classInput).addEventListener("keyup", handle);
}

changeIconColor(".js-input-phone", "#phone", ".js-icon-phone");
changeIconColor(".js-input-email", "#email", ".js-icon-email");
changeIconColor(".js-input-github", "#github", ".js-icon-github");
changeIconColor(".js-input-linkedin", "#linkedin", ".js-icon-linkedin");

// icon clickables when you write email,github & linkedin

function changeLinkIcon(variableinput, classIcon) {
  const classIconUsed = document.querySelector(classIcon);
  const inputText = document.querySelector(variableinput);

  const handle = function() {
    if (
      inputText.value.startsWith("http://") ||
      inputText.value.startsWith("https://")
    ) {
      classIconUsed.href = inputText.value;
    } else {
      classIconUsed.href = `http://${inputText.value}`;
    }
  };
  document.querySelector(variableinput).addEventListener("keyup", handle);
}

changeLinkIcon(".js-input-email", ".js-icon-link-email");
changeLinkIcon(".js-input-github", ".js-icon-link-github");
changeLinkIcon(".js-input-linkedin", ".js-icon-link-linkedin");

// LocalStorage
const nameInput = document.querySelector(".js-input-name");
const jobInput = document.querySelector(".js-input-job");
const photo = document.querySelector(".js-photo");
const emailInput = document.querySelector(".js-input-email");
const phoneInput = document.querySelector(".js-input-phone");
const linkedinInput = document.querySelector(".js-input-linkedin");
const githubInput = document.querySelector(".js-input-github");
const paletteInput = document.querySelectorAll(".js-palettes");
const itemInputs = document.querySelectorAll(".item__input");
const typograInputs = document.querySelectorAll(".js-typography");
const photoCard = document.querySelector(".js-card__image");

function readChoosenPalette() {
  const inputChecked = document.querySelector(".js-palettes:checked");
  return parseInt(inputChecked.value);
}

function readChoosenTypogra() {
  const inputChecked = document.querySelector(".js-typography:checked");
  return parseInt(inputChecked.value);
}

function previewLocalStorage() {
  for (let i = 0; i < itemInputs.length; i = i + 1) {
    itemInputs[i].dispatchEvent(new Event("keyup"));
  }
}

//document.querySelector('.js-input-github').dispatchEvent(new Event('keyup'));
// nameInput.dispatchEvent(new Event("keyup"));
const formInfo = {};

const saveInfo = () => {
  formInfo.palette = readChoosenPalette();
  formInfo.name = nameInput.value;
  formInfo.job = jobInput.value;
  formInfo.photo = photo.src;
  formInfo.email = emailInput.value;
  formInfo.phone = phoneInput.value;
  formInfo.linkedin = linkedinInput.value;
  formInfo.github = githubInput.value;
  formInfo.typogra = readChoosenTypogra();

  // Pasar objeto a cadena
  localStorage.setItem("userData", JSON.stringify(formInfo));
  changeButtonColor();
};

const getFromLocalStorage = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (userData !== null) {
    paletteInput.value = userData.palette;
    nameInput.value = userData.name;
    jobInput.value = userData.job;
    photo.src = userData.photo;
    if (!!userData.photo === true) {
      photoCard.style.backgroundImage = `url(${userData.photo})`;
      photo.style.backgroundImage = `url(${userData.photo})`;
    } else {
      photoCard.style.backgroundImage = `url("../../assets/images/default.jpg")`;
    }
    emailInput.value = userData.email;
    phoneInput.value = userData.phone;
    linkedinInput.value = userData.linkedin;
    githubInput.value = userData.github;
    typograInputs.value = userData.typogra;
  }
};

// const form = document.querySelector(".js-form");
form.addEventListener("keyup", saveInfo);
form.addEventListener("click", saveInfo);

//// changing color of button-share when form is completed

form.addEventListener("keyup", changeButtonColor);

const startApp = () => {
  if (!!formInfo === true) {
    getFromLocalStorage();
    previewLocalStorage();
    changeButtonColor();
  }
};

startApp();
