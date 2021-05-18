export default class Card {
  constructor({title, link}, cardSelector, handleCardClick) {
    this._title = title;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
        this._handleCardClick();
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