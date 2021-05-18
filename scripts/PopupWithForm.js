/*Создайте класс `PopupWithForm`, который наследует от `Popup`. Этот класс:
- Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
- Содержит приватный метод `_getInputValues`, который собирает данные всех полей формы.
- Перезаписывает родительский метод `_setEventListeners`. Метод `_setEventListeners` класса `PopupWithForm` должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
- Перезаписывает родительский метод `close`, так как при закрытии попапа форма должна ещё и сбрасываться.
`PopupWithForm` Для каждого попапа создавайте свой экземпляр класса `PopupWithForm`.*/
import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._formList = this._popupSelector.querySelector('.popup__form');
    this._inputList = this._popupSelector.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formList.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandler();
    });
  }

  close() {
    super.close();
    this._formList.reset();
  }
}