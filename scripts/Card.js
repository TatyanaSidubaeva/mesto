import { viewCardModal, closeViewCardModalButton } from "./constants.js";
import { closeModal, openModal } from "./script.js";

class Card {
  constructor(data, cardSelector) {
    this._title = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._element
      .querySelector('.card__image').addEventListener('click', () => {
        this._openViewCard();
      });
      
    closeViewCardModalButton.addEventListener('click', () => {
      closeModal(viewCardModal)
    });

    this._element
      .querySelector('.card__delete-button').addEventListener('click', () => {
        this._removeCard();
      });

    this._element
      .querySelector('.card__like-button').addEventListener('click', () => {
        this._likeCard();
      });
  }

  _openViewCard() {
    const viewCardPopup = viewCardModal.querySelector('.popup__view-card');
    const imagePopup = viewCardPopup.querySelector('.popup__image');
    const captionPopup = viewCardPopup.querySelector('.popup__image-caption');
    imagePopup.src = this._link;
    imagePopup.alt = this._title;
    captionPopup.textContent = this._title;
    openModal(viewCardModal);
  }

  _removeCard() {
    this._element.remove();
  }
  
  _likeCard() {
    this._element
      .querySelector('.card__like-button').classList.toggle('card__like-button_active');
  }
  
  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.card__title').textContent = this._title;
    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__image').alt = this._title;

    return this._element;
  }
}

export default Card;