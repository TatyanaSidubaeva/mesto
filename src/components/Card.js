export default class Card {
  constructor({data, cardSelector, handlerCardClick, handlerDeleteCard, idUser, addLike, deleteLike}) {
    this._title = data.name;
    this._image = data.link;
    this._likes = data.likes;
    this._idCard = data._id;
    this._cardSelector = cardSelector;
    this._handlerCardClick = handlerCardClick;
    this._handlerDeleteCard = handlerDeleteCard;
    this._idCardOwner = data.owner._id;
    this._id = idUser;
    this._addLike = addLike;
    this._deleteLike = deleteLike;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  _checkIdLikes(likes) {
    likes.forEach(arrayUser => {
      if (arrayUser._id === this._id) {
        this._cardButtonLike.classList.add('card__like-button_active');
      }
    });
  }

  _removeLike() {
    this._cardButtonLike.classList.remove('card__like-button_active');
    this._deleteLike();
  }

  _setLike() {
    this._cardButtonLike.classList.add('card__like-button_active');
    this._addLike();
  }

  _handlerPreviewCard() {
    this._handlerCardClick(this._title, this._image)
  }

  _handlerLikeButton() {
    if (this._cardButtonLike.classList.contains('card__like-button_active')) {
      this._removeLike();
    } else {
      this._setLike()
    }
  }

  _setEventListener() {
    this._element
      .querySelector('.card__image').addEventListener('click', this._handlerPreviewCard.bind(this));

    this._element
      .querySelector('.card__delete-button').addEventListener('click', this._handlerDeleteCard.bind(this));

    this._element
      .querySelector('.card__like-button').addEventListener('click', this._handlerLikeButton.bind(this));
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }

  updateLike(data) {
    this._countLikes.textContent = data.likes.length;
  }

  getId() {
    return this._idCard;
  }

  createCard() {
    this._element = this._getTemplate();
    this._cardButtonLike = this._element.querySelector('.card__like-button');
    this._cardButtonDelete = this._element.querySelector('.card__delete-button');
    this._cardTitle = this._element.querySelector('.card__title');
    this._cardImage = this._element.querySelector('.card__image');
    this._countLikes = this._element.querySelector('.card__like-count');
    this._countLikes.textContent = this._likes.length;
    this._cardTitle.textContent = this._title;
    this._cardImage.src = this._image;
    this._cardImage.alt = this._image;
    this._setEventListener();
    this._checkIdLikes(this._likes);

    if (this._idCardOwner !== this._id) {
      this._cardButtonDelete.remove();
    }
    return this._element;
  }

}