export default class Section {
  constructor({renderer}, containerSelector) {
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  renderItems(cardList) {
    cardList.forEach(item => this._renderer(item));
  }

  addItem(element, isPrepend) {
    isPrepend === true ? this._containerSelector.prepend(element) : this._containerSelector.append(element);
  }
}