class FormValidator {
  constructor(formSelector, validationParametrs) {
    this._formSelector = formSelector;
    this._inputSelector = validationParametrs.inputSelector;
    this._submitButtonSelector = validationParametrs.submitButtonSelector;
    this._inactiveButtonClass = validationParametrs.inactiveButtonClass;
    this._inputErrorClass = validationParametrs.inputErrorClass;
    this._errorClass = validationParametrs.errorClass;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formSelector.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formSelector.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
      console.log("ShowInputError");
    } else {
      this._hideInputError(inputElement);
      console.log("HideInputError");
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleSubmitButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  }

  _setEventListeners() {
    const inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
    const buttonElement = this._formSelector.querySelector(this._submitButtonSelector);
    this._toggleSubmitButtonState(inputList, buttonElement);
    console.log("set1");
    inputList.forEach((inputElement) => {
      console.log("settt");
      console.log(inputElement);
      inputElement.addEventListener('input', () => {
        console.log("set2");
        this._checkInputValidity(inputElement);
        this._toggleSubmitButtonState(inputList, buttonElement);
      });
    });
  }

  enableValidation() {
    this._formSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
      console.log("la");
      const buttonElement = this._formSelector.querySelector(this._submitButtonSelector);
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    });
    this._setEventListeners();
    console.log("Enable_set");

  }
}

export default FormValidator;