import handleOriginalResponse from './utils';
const token = localStorage.getItem('jwt');

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(handleOriginalResponse);
  }

  getUserInfoFromServer() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(handleOriginalResponse);
  }

  getAllInfo() {
    return Promise.all([this.getUserInfoFromServer(), this.getInitialCards()]);
  }

  updateUserInfo(userData) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about
      }),
    }).then(handleOriginalResponse);
  }

  sendNewCard(cardData) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: cardData.name,
        link: cardData.link
      }),
    }).then(handleOriginalResponse);
  }

  deleteCardFromServer(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(handleOriginalResponse);
  }

  changeLikeCardStatus(cardId, status) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: (status) ? "PUT" : "DELETE",
      headers: this._headers,
    }).then(handleOriginalResponse);
  }

  updateAvatar(avatarLink) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarLink
      }),
    }).then(handleOriginalResponse);
  }
}

const api = new Api({
  baseUrl: "https://api.balor.nomoredomains.club",
  headers: {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export default api;
