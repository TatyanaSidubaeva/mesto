import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popupSelector.querySelector('.popup__image');
    this._popupCaption = this._popupSelector.querySelector('.popup__image-caption');
  }

  open({title, link}) {
    super.open();
    this._popupCaption.textContent = title;
    this._popupImage.src = link;
    this._popupImage.alt = title;
  }
}