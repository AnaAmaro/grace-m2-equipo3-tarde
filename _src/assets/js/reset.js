/* eslint-disable strict */
// botón reset
const reset = document.querySelector('.js-sectiona__buton');

function resetAutopreview() {
  const previewName = document.querySelector('.js-box1_result');
  const previewJob = document.querySelector('.js-preview__job');
  const iconsUsed = document.querySelectorAll('.js-icon-preview');
  const previewCardContainer = document.querySelector('.card');
  const previewTypo = document.querySelector('.js-typocontainer');

  previewName.innerHTML = 'Nombre Apellido';
  previewJob.innerHTML = 'Front-end developer';

  previewCardContainer.classList.remove('palette1', 'palette2', 'palette3');
  previewTypo.classList.remove('typography1', 'typography2', 'typography3');

  for (const iconUsed of iconsUsed) {
    iconUsed.style.color = 'lightgrey';
  }
  localStorage.removeItem('userData');
}

function deleteText() {
  const image = document.querySelector('.js-card__image');
  const formFields = document.querySelector('.js-form');
  const preview = document.querySelector('.js-preview');
  formFields.reset(); //Reseteamos el formulario
  preview.src = ' '; //Dejamos en blanco para que no meta imagen
  image.style.backgroundImage = 'url(../../assets/images/default.jpg)';
}

reset.addEventListener('click', deleteText);
reset.addEventListener('click', resetAutopreview);
