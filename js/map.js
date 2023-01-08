const mapButton = document.querySelector('.contacts-map');
const mapPopup = document.querySelector('.modal-map');
const mapClose = mapPopup.querySelector('.modal-close');

mapButton.addEventListener('click', function () {
  mapPopup.classList.add('modal-show');
});

mapClose.addEventListener('click', function () {
  mapPopup.classList.remove('modal-show');
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

