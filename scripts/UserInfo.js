/* Создайте класс `UserInfo`
Класс `UserInfo` отвечает за управление отображением информации о пользователе на странице. Этот класс:
- Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
- Содержит публичный метод `getUserInfo`, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
- Содержит публичный метод `setUserInfo,` который принимает новые данные пользователя и добавляет их на страницу.*/
export default class UserInfo {
  constructor({nameSelector, jobSelector}) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
  }

  getUserInfo() {
    this._profileData = {
      name: this._name.textContent,
      job: this._job.textContent,
    };
    return this._profileData;
  }

  setUserInfo({name, job}) {
    this._name.textContent = name;
    this._job.textContent = job;
  }
}