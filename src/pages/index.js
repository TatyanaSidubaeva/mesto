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

const popupCard = new PopupWithForm(popupCardSelector, {
  submitHandler: (data) => {
    const cardData = { title: data.title, link: data.link };
    defaultCards.addItem(createCard(cardData));
  }
});

const popupProfile = new PopupWithForm(popupProfileSelector, {
  submitHandler: (data) => {
    userData.setUserInfo({ name: data.name, job: data.job });
  }
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