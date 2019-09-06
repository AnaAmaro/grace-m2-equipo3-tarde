const previewCard = document.querySelector(".js-palettecontainer");

function createPaletteSelectorFunction(classPalette) {
  return function() {
    previewCard.className = `js-card ${classPalette}`;
  };
}

const selectPalette1 = createPaletteSelectorFunction("palette1");
const selectPalette2 = createPaletteSelectorFunction("palette2");
const selectPalette3 = createPaletteSelectorFunction("palette3");

const ratio1 = document
  .querySelector("#option1")
  .addEventListener("change", selectPalette1);
const ratio2 = document
  .querySelector("#option2")
  .addEventListener("change", selectPalette2);
const ratio3 = document
  .querySelector("#option3")
  .addEventListener("change", selectPalette3);

// change typography function

const previewCardTypo = document.querySelector(".js-typocontainer");

function createTypographySelectorFunction(classTypography) {
  return function() {
    previewCardTypo.className = `js-card ${classTypography}`;
  };
}

const selectTypography1 = createTypographySelectorFunction("typography1");
const selectTypography2 = createTypographySelectorFunction("typography2");
const selectTypography3 = createTypographySelectorFunction("typography3");

const ratioTypo1 = document
  .querySelector("#option1_typo")
  .addEventListener("change", selectTypography1);
const ratioTypo2 = document
  .querySelector("#option2_typo")
  .addEventListener("change", selectTypography2);
const ratioTypo3 = document
  .querySelector("#option3_typo")
  .addEventListener("change", selectTypography3);
