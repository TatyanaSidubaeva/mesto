import "./index.css";

import {
  openEditProfileModalButton,
  openAddCardModalButton,
  nameInput,
  jobInput,
  formEditProfile,
  formAddCard,
  formChangeAvatar,
  enableValidationParametrs,
  popupProfileSelector,
  popupCardSelector,
  popupPreviewSelector,
  popupApplyDeleteSelector,
  popupEditAvatarSelector,
  profileSelector,
  profileAvatar,
  cardContainerSelector
} from "../utils/constants.js";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Api from "../components/Api.js";
import PopupApplyDelete from "../components/PopupApplyDelete.js";
import renderLoadingData from "../utils/utils.js";

function createCard(item) {
  const card = new Card({
    data: item,
    cardSelector: '.template-cards',
    handlerCardClick: (name, link) => {
      popupPreview.open(name, link);
    },
    handlerDeleteCard: () => {
      popupApplyDelete.open();
      popupApplyDelete.setSubmitAction(() => {
        api.deleteCard(card.getId())
          .then(() => card.removeCard())
          .catch(err => console.log('Ошибка удаления карточки'))
      })
    },
    idUser: userInfo.getUserInfo().id,
    addLike: () => {
      api.addLikeCard(card.getId())
        .then(data => card.updateLike(data))
        .catch(err => console.log('Ошибка установки лайка'))
    },
    deleteLike: () => {
      api.deleteLikeCard(card.getId())
        .then(data => card.updateLike(data))
        .catch(err => console.log('Ошибка снятия лайка'))
    }
  })
  return card.createCard();
}

const api = new Api({
  address: 'https://mesto.nomoreparties.co',
  token: '64e02cf6-a72f-4af5-8029-854c4ae65b8d',
  cohortId: 'cohort-24'
})

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    defaultCards.renderItems(cards);
  })
  .catch(err => console.log('Ошибка получения данных пользователя и/или инициализации карточек'))

const userInfo = new UserInfo(profileSelector);

const defaultCards = new Section(
  {
    renderer: (item) => {
      defaultCards.addItem(createCard(item), false);
    },
  },
  cardContainerSelector
);

const popupPreview = new PopupWithImage(popupPreviewSelector);

const popupApplyDelete = new PopupApplyDelete(popupApplyDeleteSelector);

const popupChangeAvatar = new PopupWithForm((popupEditAvatarSelector), {
  submitHandler: (data) => {
    renderLoadingData(formChangeAvatar, 'Сохранение...')
    api.setUserAvatar(data)
      .then(result => {
        userInfo.setUserInfo(result);
        renderLoadingData(formChangeAvatar, 'Сохранить')
      })
      .catch(err => console.log('Ошибка изменения аватара'))
  }
});

const popupCard = new PopupWithForm(popupCardSelector, {
  submitHandler: (data) => {
    renderLoadingData(formAddCard, 'Создание...')
    api.addNewCard(data)
      .then(result => {
        const cardElement = createCard(result);
        defaultCards.addItem(cardElement, true);
        renderLoadingData(formAddCard, 'Создать')
      })
      .catch(err => console.log('Ошибка создания карточки'))
  }
});

const popupProfile = new PopupWithForm(popupProfileSelector, {
  submitHandler: (data) => {
    renderLoadingData(formEditProfile, 'Сохранение...')
    api.setUserInfo(data)
      .then(result => {
        userInfo.setUserInfo(result);
        renderLoadingData(formEditProfile, 'Сохранить')
      })
      .catch(err => console.log('Ошибка редактирования профиля'))
  }
});

openEditProfileModalButton.addEventListener('click', () => {
  nameInput.value = userInfo.getUserInfo().name;
  jobInput.value = userInfo.getUserInfo().info;
  popupProfile.open();
});

openAddCardModalButton.addEventListener('click', function () {
  popupCard.open();
});

profileAvatar.addEventListener('click', () => {
  popupChangeAvatar.open();
});

popupProfile.setEventListeners();
popupCard.setEventListeners();
popupPreview.setEventListeners();
popupApplyDelete.setEventListeners();
popupChangeAvatar.setEventListeners();

const formEditProfileValidator = new FormValidator(formEditProfile, enableValidationParametrs);
formEditProfileValidator.enableValidation();

const formAddCardValidator = new FormValidator(formAddCard, enableValidationParametrs);
formAddCardValidator.enableValidation();

const formChangeAvatarValidator = new FormValidator(formChangeAvatar, enableValidationParametrs);
formChangeAvatarValidator.enableValidation();