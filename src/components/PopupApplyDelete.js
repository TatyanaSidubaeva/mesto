import Popup from "./Popup";

export default class PopupApplyDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formList = this._popupSelector.querySelector('.popup__form');
  }

  setSubmitAction(action) {
    this._handleSubmitCallback = action;
  }  
  
  setEventListeners() {
    super.setEventListeners();
    this._formList.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback();
      this.close();
    });
  }
}