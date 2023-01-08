const buttonDelivery = document.querySelector('.button-delivery');
const buttonWarranty = document.querySelector('.button-warranty');
const buttonCredit = document.querySelector('.button-credit');
const serviceDelivery = document.querySelector('.service-delivery');
const serviceWarranty = document.querySelector('.service-warranty');
const serviceCredit = document.querySelector('.service-credit');

buttonDelivery.addEventListener('click', function () {
  buttonDelivery.classList.add('services-button-current');
  serviceDelivery.classList.add('services-slider-current');

  if (buttonWarranty.classList.contains('services-button-current') || buttonCredit.classList.contains('services-button-current')) {
    buttonWarranty.classList.remove('services-button-current');
    buttonCredit.classList.remove('services-button-current');
  }

  if (serviceWarranty.classList.contains('services-slider-current') || serviceCredit.classList.contains('services-slider-current')) {
    serviceWarranty.classList.remove('services-slider-current');
    serviceCredit.classList.remove('services-slider-current');
  }
});

buttonWarranty.addEventListener('click', function () {
  buttonWarranty.classList.add('services-button-current');
  serviceWarranty.classList.add('services-slider-current');

  if (buttonDelivery.classList.contains('services-button-current') || buttonCredit.classList.contains('services-button-current')) {
    buttonDelivery.classList.remove('services-button-current');
    buttonCredit.classList.remove('services-button-current');
  }

  if (serviceDelivery.classList.contains('services-slider-current') || serviceCredit.classList.contains('services-slider-current')) {
    serviceDelivery.classList.remove('services-slider-current');
    serviceCredit.classList.remove('services-slider-current');
  }
});

buttonCredit.addEventListener('click', function () {
  buttonCredit.classList.add('services-button-current');
  serviceCredit.classList.add('services-slider-current');

  if (buttonDelivery.classList.contains('services-button-current') || buttonWarranty.classList.contains('services-button-current')) {
    buttonDelivery.classList.remove('services-button-current');
    buttonWarranty.classList.remove('services-button-current');
  }

  if (serviceDelivery.classList.contains('services-slider-current') || serviceWarranty.classList.contains('services-slider-current')) {
    serviceDelivery.classList.remove('services-slider-current');
    serviceWarranty.classList.remove('services-slider-current');
  }
});



