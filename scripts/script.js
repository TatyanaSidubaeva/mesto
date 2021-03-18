const popupEditButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close-button');
const popupSaveButton = popup.querySelector('.popup__save-button');
let formElement = popup.querySelector('.popup__form');

function popupToggle() {
  console.log('button clicked');
  popup.classList.toggle('popup_opened');
}

popupEditButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
popupSaveButton.addEventListener('click', popupToggle);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  
  // Находим поля формы в DOM
  let nameInput = formElement.querySelector('.popup__name');
  let jobInput = formElement.querySelector('.popup__job');

  // Выводим значение полей из свойства value
  console.log(nameInput.value);
  console.log(jobInput.value);

  // Выбираем элементы, куда должны быть вставлены значения полей
  let profileName  = document.querySelector('.profile__name');
  let profileJob  = document.querySelector('.profile__job');

  // Вставлем новые значения с помощью textContent
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);