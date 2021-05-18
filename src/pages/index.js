import "./index.css";

import {
  initialCards,
  openEditProfileModalButton,
  openAddCardModalButton,
  nameInput,
  jobInput,
  formEditProfile,
  formAddCard,
  enableValidationParametrs,
  popupProfileSelector,
  popupCardSelector,
  popupPreviewSelector,
  profileSelector,
  cardContainerSelector
} from "../utils/constants.js";

import Card from "../components/Card.js";

import FormValidator from "../components/FormValidator.js";

import Section from "../components/Section.js";

import UserInfo from "../components/UserInfo.js";

import PopupWithImage from "../components/PopupWithImage.js";

import PopupWithForm from "../components/PopupWithForm.js";

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

const formEditProfileValidator = new FormValidator(formEditProfile, enableValidationParametrs);
formEditProfileValidator.enableValidation();

const formAddCardValidator = new FormValidator(formAddCard, enableValidationParametrs);
formAddCardValidator.enableValidation();