const form = document.querySelector('.form');
const submitCtrl = document.querySelector('div.form__submit');
const addBagLabelText = document.querySelector('.form__label-text--add-bag-js');
const addBagCtrl = document.querySelector('.form__input--add-bag');
const colorsGroup = document.querySelector('.form__group--colors');

if (submitCtrl) {
  submitCtrl.addEventListener('click', () => {
    form.submit();
  });
}

if (addBagLabelText) {
  addBagLabelText.addEventListener('click', () => {
    addBagCtrl.checked = !addBagCtrl.checked;
    changeColorsState();
  });
}

addBagCtrl.addEventListener('change', () => {
  changeColorsState();
})

function changeColorsState() {
  colorsGroup.disabled = !addBagCtrl.checked;
  colorsGroup.ariaHidden = !addBagCtrl.checked;

  // Need to make consistent styles between good & bad version
  if (colorsGroup.tagName === 'DIV') {
    colorsGroup.classList.toggle('form__group--disabled');
  }
}

