import {
  initialCards,
  editProfileModal,
  addCardModal,
  viewCardModal,
  editProfileOverlay,
  addCardOverlay,
  viewCardOverlay,
  openEditProfileModalButton,
  openAddCardModalButton,
  closeEditProfileModalButton,
  closeAddCardModalButton,
  closeViewCardModalButton,
  profileName,
  profileJob,
  nameInput,
  jobInput,
  titleInput,
  linkInput,
  cardTemplate,
  cardsContainer,
  formEditProfile,
  formAddCard,
  enableValidationParametrs,
  popupProfileSelector,
  popupCardSelector,
  popupPreviewSelector,
  profileSelector,
  cardContainerSelector
} from "./constants.js";

import Card from "./Card.js";

import FormValidator from "./FormValidator.js";

import Section from "./Section.js";

import UserInfo from "./UserInfo.js";

import PopupWithImage from "./PopupWithImage.js";

import PopupWithForm from "./PopupWithForm.js";

function createCard(cardData) {
  const card = new Card(cardData, '#card', () => {
    popupPreview.open(cardData);
  });
  return card.createCard();
}

const userData = new UserInfo(profileSelector);

const defaultCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      defaultCards.addItem(createCard(item));
    },
  },
  cardContainerSelector
);

const popupPreview = new PopupWithImage(popupPreviewSelector);

const popupCard = new PopupWithForm(popupCardSelector, () => {
  const cardData = popupCard._getInputValues();
  defaultCards.addItem(createCard(cardData));
  popupCard.close();
});

const popupProfile = new PopupWithForm(popupProfileSelector, () => {
  userData.setUserInfo(popupProfile._getInputValues());
  popupProfile.close();
});

defaultCards.renderItems();

openEditProfileModalButton.addEventListener('click', () => {
  nameInput.value = userData.getUserInfo().name;
  jobInput.value = userData.getUserInfo().job;
  popupProfile.open();
});

openAddCardModalButton.addEventListener('click', function () {
  popupCard.open();
});

popupProfile.setEventListeners();
popupCard.setEventListeners();
popupPreview.setEventListeners();
/*function keyHandler(evt) {
  if (evt.key === 'Escape') {
    closeModal(document.querySelector('.popup_opened'));
  }
}

export function openModal(modal) {
  modal.classList.add('popup_opened');
  document.addEventListener('keydown', keyHandler);
}

export function closeModal(modal) {
  modal.classList.remove('popup_opened');
  document.removeEventListener('keydown', keyHandler);
}

function submitEditProfileFormHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeModal(editProfileModal);
}

function submitAddCardFormHandler (evt) {
  evt.preventDefault();
  const cardData = {
    name: titleInput.value,
    link: linkInput.value,
  };
  const card = new Card(cardData, '#card');
  cardsContainer.prepend(card.createCard());
  closeModal(addCardModal);
  addCardModal.querySelector('.popup__form').reset();
}

initialCards.forEach((item) => {
  const card = new Card(item, '#card');
  cardsContainer.append(card.createCard());
});

openAddCardModalButton.addEventListener('click', () => openModal(addCardModal));

addCardModal.addEventListener('submit', submitAddCardFormHandler);

closeAddCardModalButton.addEventListener('click', () => closeModal(addCardModal));

addCardOverlay.addEventListener('click', () => closeModal(addCardModal));

viewCardOverlay.addEventListener('click', () => closeModal(viewCardModal));

openEditProfileModalButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openModal(editProfileModal);
})

closeEditProfileModalButton.addEventListener('click', () => closeModal(editProfileModal));

editProfileOverlay.addEventListener('click', () => closeModal(editProfileModal));

editProfileModal.addEventListener('submit', submitEditProfileFormHandler);*/

const formEditProfileValidator = new FormValidator(formEditProfile, enableValidationParametrs);
formEditProfileValidator.enableValidation();

const formAddCardValidator = new FormValidator(formAddCard, enableValidationParametrs);
formAddCardValidator.enableValidation();