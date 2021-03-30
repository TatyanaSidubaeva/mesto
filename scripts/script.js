const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const editProfileModal = document.querySelector('.popup_type_edit-profile');
const addCardModal = document.querySelector('.popup_type_add-card');
const viewCardModal = document.querySelector('.popup_type_view-card');

const openEditProfileModalButton = document.querySelector('.profile__edit-button');
const openAddCardModalButton = document.querySelector('.profile__add-button');

const closeEditProfileModalButton = editProfileModal.querySelector('.popup__close-button');
const closeAddCardModalButton = addCardModal.querySelector('.popup__close-button');
const closeViewCardModalButton = viewCardModal.querySelector('.popup__close-button');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const nameInput = editProfileModal.querySelector('.popup__input_type_name');
const jobInput = editProfileModal.querySelector('.popup__input_type_job');

const titleInput = addCardModal.querySelector('.popup__input_type_title');
const linkInput = addCardModal.querySelector('.popup__input_type_link');


const cardTemplate = document.querySelector('#card').content;
const cardsContainer = document.querySelector('.cards__list');

function toggleModalWindow(modal) {
  modal.classList.toggle('popup_opened');
}

function submitEditProfileFormHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  toggleModalWindow(editProfileModal);
}

function submitAddCardFormHandler (evt) {
  evt.preventDefault();
  const inputTitleCardValue = titleInput.value;
  const inputLinkCardValue = linkInput.value;
  createCard(inputTitleCardValue, inputLinkCardValue, 1);
  toggleModalWindow(addCardModal);
}

function createCard(name, link, first) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const titleCard = card.querySelector('.card__title');
  const imageCard = card.querySelector('.card__image');
  titleCard.textContent = name;
  imageCard.src = link;
  imageCard.alt = name;
  if (first) cardsContainer.prepend(card)
  else cardsContainer.append(card);
  imageCard.addEventListener('click', openViewCard);
  function openViewCard (e) {
    const viewCardPopup = viewCardModal.querySelector('.popup__view-card');
    const imagePopup = viewCardPopup.querySelector('.popup__image');
    const captionPopup = viewCardPopup.querySelector('.popup__image-caption');
    imagePopup.src = e.target.src;
    imagePopup.alt = e.target.alt;
    captionPopup.textContent = e.target.alt;
    toggleModalWindow(viewCardModal);
  }
}

initialCards.forEach(card => createCard(card.name, card.link));

openAddCardModalButton.addEventListener('click', () => toggleModalWindow(addCardModal));

cardsContainer.addEventListener('click', e => {
  const button = e.target;
  const listItem = button.closest('.card');
  if(button.classList.contains('card__delete-button')) {
    listItem.remove();
  }
  if(button.classList.contains('card__like-button')) {
    button.classList.toggle('card__like-button_active');
  }
});

addCardModal.addEventListener('submit', submitAddCardFormHandler);

closeAddCardModalButton.addEventListener('click', () => toggleModalWindow(addCardModal));

closeViewCardModalButton.addEventListener('click', () => toggleModalWindow(viewCardModal));

openEditProfileModalButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  toggleModalWindow(editProfileModal);
})

closeEditProfileModalButton.addEventListener('click', () => toggleModalWindow(editProfileModal));

editProfileModal.addEventListener('submit', submitEditProfileFormHandler);