/* eslint-disable no-undef */
// imagen preview
// eslint-disable-next-line strict
const browse = document.querySelector(".js-form__photo");
const loadFile = function(event) {
  fr.addEventListener("load", loadFileToImages);
  fr.readAsDataURL(event.target.files[0]);
};
browse.addEventListener("change", loadFile);

const loadFileToImages = function() {
  let preview = document.querySelector(".preview");
  preview.src = fr.result;
  let cardImage = document.querySelector(".js-card__image");
  cardImage.style.backgroundImage = `url(${fr.result})`;
  saveInfo();
};
