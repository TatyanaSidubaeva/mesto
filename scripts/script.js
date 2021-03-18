const popupEditButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close-button');
const popupSaveButton = popup.querySelector('.popup__save-button');
let formElement = popup.querySelector('.popup__form');

function popupToggle() {
  console.log('button clicked');
  popup.classList.toggle('popup_opened');
}

popupEditButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
popupSaveButton.addEventListener('click', popupToggle);

// ���������� ��������� �����, ���� ����
// ��� ������ ������������ �� �����
function formSubmitHandler (evt) {
  evt.preventDefault(); // ��� ������� �������� ����������� �������� �����.
  
  // ������� ���� ����� � DOM
  let nameInput = formElement.querySelector('.popup__name');
  let jobInput = formElement.querySelector('.popup__job');

  // ������� �������� ����� �� �������� value
  console.log(nameInput.value);
  console.log(jobInput.value);

  // �������� ��������, ���� ������ ���� ��������� �������� �����
  let profileName  = document.querySelector('.profile__name');
  let profileJob  = document.querySelector('.profile__job');

  // �������� ����� �������� � ������� textContent
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
}

// ����������� ���������� � �����:
// �� ����� ������� �� �������� �submit� - ���������
formElement.addEventListener('submit', formSubmitHandler);