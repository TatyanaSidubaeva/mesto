export const initialCards = [
  {
    title: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const editProfileModal = document.querySelector('.popup_type_edit-profile');
export const addCardModal = document.querySelector('.popup_type_add-card');
export const viewCardModal = document.querySelector('.popup_type_view-card');

export const editProfileOverlay = editProfileModal.querySelector('.popup__overlay');
export const addCardOverlay = addCardModal.querySelector('.popup__overlay');
export const viewCardOverlay = viewCardModal.querySelector('.popup__overlay');

export const openEditProfileModalButton = document.querySelector('.profile__edit-button');
export const openAddCardModalButton = document.querySelector('.profile__add-button');

export const closeEditProfileModalButton = editProfileModal.querySelector('.popup__close-button');
export const closeAddCardModalButton = addCardModal.querySelector('.popup__close-button');
export const closeViewCardModalButton = viewCardModal.querySelector('.popup__close-button');

export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');

export const nameInput = editProfileModal.querySelector('.popup__input_type_name');
export const jobInput = editProfileModal.querySelector('.popup__input_type_job');

export const titleInput = addCardModal.querySelector('.popup__input_type_title');
export const linkInput = addCardModal.querySelector('.popup__input_type_link');

export const cardTemplate = document.querySelector('#card').content;
export const cardsContainer = document.querySelector('.cards__list');

export const formEditProfile = editProfileModal.querySelector('.popup__form');
export const formAddCard = addCardModal.querySelector('.popup__form');

export const enableValidationParametrs = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

export const popupProfileSelector = '.popup_type_edit-profile';

export const popupCardSelector = '.popup_type_add-card';

export const popupPreviewSelector = '.popup_type_view-card';

export const profileSelector = {
  nameSelector: '.profile__name',
  jobSelector: '.profile__job',
};

export const cardContainerSelector = '.cards__list';