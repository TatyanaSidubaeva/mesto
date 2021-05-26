export default class Api {
  constructor({address, token, cohortId}) {
    this._address = address;
    this._token = token;
    this._cohort = cohortId;
  }
  _handleResponse(result) {
  if (result.ok) {
    return result.json();
  }
  return Promise.reject(`Ошибка: ${result.status}`);
  }

  getUserInfo() {
    return fetch(`${this._address}/v1/${this._cohort}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
    .then(result => this._handleResponse(result));
  }

  setUserInfo(data) {
    return fetch(`${this._address}/v1/${this._cohort}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.job
      })
    })
    .then(result => this._handleResponse(result));
  }

  setUserAvatar(data) {
    return fetch(`${this._address}/v1/${this._cohort}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.avatarlink
      })
    })
    .then(result => this._handleResponse(result));
  }

  getInitialCards() {
    return fetch(`${this._address}/v1/${this._cohort}/cards`, {
      headers: {
        authorization: this._token
      }
    })
    .then(result => this._handleResponse(result));
  }

  addNewCard(data) {
    return fetch(`${this._address}/v1/${this._cohort}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.title,
        link: data.link
      })
    })
    .then(result => this._handleResponse(result));
  }

  deleteCard(id) {
    return fetch(`${this._address}/v1/${this._cohort}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    .then(result => this._handleResponse(result));
  }

  addLikeCard(id) {
    return fetch(`${this._address}/v1/${this._cohort}/cards/likes/${id}`, {
      method: 'PUT',
      headers: {
        authorization: this._token
      }
    })
    .then(result => this._handleResponse(result));
  }

  deleteLikeCard(id) {
    return fetch(`${this._address}/v1/${this._cohort}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    .then(result => this._handleResponse(result));
  }
}