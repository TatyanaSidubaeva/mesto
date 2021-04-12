const showInputError = (formElement, inputElement, errorMessage, enableValidationElements) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(enableValidationElements.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(enableValidationElements.errorClass);
}

const hideInputError = (formElement, inputElement, enableValidationElements) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(enableValidationElements.inputErrorClass);
  errorElement.classList.remove(enableValidationElements.errorClass);
  errorElement.textContent = '';
}

const checkInputValidity = (formElement, inputElement, enableValidationElements) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, enableValidationElements);
  } else {
    hideInputError(formElement, inputElement, enableValidationElements);
  }
}

const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  });
}

const toggleSubmitButtonState = (inputList, buttonElement, enableValidationElements) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(enableValidationElements.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(enableValidationElements.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}

const setEventListeners = (formElement, enableValidationElements) => {
  const inputList = Array.from(formElement.querySelectorAll(enableValidationElements.inputSelector));
  const buttonElement = formElement.querySelector(enableValidationElements.submitButtonSelector);
  toggleSubmitButtonState(inputList, buttonElement, enableValidationElements);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function() {
      checkInputValidity(formElement, inputElement, enableValidationElements);
      toggleSubmitButtonState(inputList, buttonElement, enableValidationElements);
    });
  });
}

const enableValidation = (enableValidationElements) => {
  const formList = Array.from(document.querySelectorAll(enableValidationElements.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt){
      evt.preventDefault();
      const buttonElement = formElement.querySelector(enableValidationElements.submitButtonSelector);
      buttonElement.classList.add(enableValidationElements.inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    });
    setEventListeners(formElement, enableValidationElements);
  });
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});