const form = document.querySelector('.form');
const submitCtrl = document.querySelector('div.form__submit');
const addBagCtrl = document.querySelector('.form__input--add-bag');
const colorsGroup = document.querySelector('.form__group--colors');

if (submitCtrl) {
  submitCtrl.addEventListener('click', () => {
    form.submit();
  });
}

addBagCtrl.addEventListener('change', () => {
  colorsGroup.disabled = !addBagCtrl.checked;
  colorsGroup.ariaHidden = !addBagCtrl.checked;

  // Need to make consistent styles between good & bad version
  if (colorsGroup.tagName === 'DIV') {
    colorsGroup.classList.toggle('form__group--disabled');
  }
})

