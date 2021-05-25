const editProfileModal = document.querySelector('.popup_type_edit-profile');
const addCardModal = document.querySelector('.popup_type_add-card');
const changeAvatarModal = document.querySelector('.popup_type_edit-avatar');

export const openEditProfileModalButton = document.querySelector('.profile__edit-button');
export const openAddCardModalButton = document.querySelector('.profile__add-button');

export const nameInput = editProfileModal.querySelector('.popup__input_type_name');
export const jobInput = editProfileModal.querySelector('.popup__input_type_job');

export const formEditProfile = editProfileModal.querySelector('.popup__form');
export const formAddCard = addCardModal.querySelector('.popup__form');
export const formChangeAvatar = changeAvatarModal.querySelector('.popup__form');

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
  avatarSelector: '.profile__avatar'
};

export const popupApplyDeleteSelector = '.popup_type_apply-delete';
export const popupEditAvatarSelector = '.popup_type_edit-avatar';

export const profileAvatar = document.querySelector('.profile__avatar');

export const cardContainerSelector = '.cards__list';