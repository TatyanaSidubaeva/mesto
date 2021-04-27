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
} from "./constants.js";

import Card from "./Card.js";

function keyHandler(evt) {
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

/*перенесено в класс Card
  function openViewCard (e) {
  const viewCardPopup = viewCardModal.querySelector('.popup__view-card');
  const imagePopup = viewCardPopup.querySelector('.popup__image');
  const captionPopup = viewCardPopup.querySelector('.popup__image-caption');
  imagePopup.src = e.target.src;
  imagePopup.alt = e.target.alt;
  captionPopup.textContent = e.target.alt;
  openModal(viewCardModal);
}

function removeCard (e) {
  const button = e.target;
  const listItem = button.closest('.card');
  listItem.remove();
}

function likeCard (e) {
  const button = e.target;
  button.classList.toggle('card__like-button_active');
}

function createCard(name, link, first) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const titleCard = card.querySelector('.card__title');
  const imageCard = card.querySelector('.card__image');
  const deleteButton = card.querySelector('.card__delete-button');
  const likeButton = card.querySelector('.card__like-button');
  titleCard.textContent = name;
  imageCard.src = link;
  imageCard.alt = name;
  if (first) cardsContainer.prepend(card)
  else cardsContainer.append(card);
  imageCard.addEventListener('click', openViewCard);
  deleteButton.addEventListener('click', removeCard);
  likeButton.addEventListener('click', likeCard);
}*/

initialCards.forEach((item) => {
  const card = new Card(item, '#card');
  cardsContainer.append(card.createCard());
});

openAddCardModalButton.addEventListener('click', () => openModal(addCardModal));

addCardModal.addEventListener('submit', submitAddCardFormHandler);

closeAddCardModalButton.addEventListener('click', () => closeModal(addCardModal));

addCardOverlay.addEventListener('click', () => closeModal(addCardModal));

// перенесено в класс Card closeViewCardModalButton.addEventListener('click', () => closeModal(viewCardModal));

viewCardOverlay.addEventListener('click', () => closeModal(viewCardModal));

openEditProfileModalButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openModal(editProfileModal);
})

closeEditProfileModalButton.addEventListener('click', () => closeModal(editProfileModal));

editProfileOverlay.addEventListener('click', () => closeModal(editProfileModal));

editProfileModal.addEventListener('submit', submitEditProfileFormHandler);