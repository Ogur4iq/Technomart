const feedbackButton = document.querySelector('.contacts-button');
const feedbackPopup = document.querySelector('.modal-feedback');
const feedbackForm = feedbackPopup.querySelector('.feedback-form');
const feedbackName = feedbackPopup.querySelector('#feedback-name');
const feedbackEmail = feedbackPopup.querySelector('#feedback-email');
const feedbackLetter = feedbackPopup.querySelector('#feedback-letter');
const buttonClose = feedbackPopup.querySelector('.modal-close');



feedbackButton.addEventListener('click', function () {
  feedbackPopup.classList.add('modal-show');
});

buttonClose.addEventListener('click', function () {
  feedbackPopup.classList.remove('modal-show');
});

feedbackForm.addEventListener('submit', function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackLetter.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem('name', feedbackName.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
    }
  }
});
