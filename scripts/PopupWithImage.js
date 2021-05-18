/*Создайте класс `PopupWithImage`, который наследует от `Popup`. Этот класс должен перезаписывать родительский метод `open`.
В методе `open` класса `PopupWithImage` нужно вставлять в попап картинку и атрибут `src` изображения.*/
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