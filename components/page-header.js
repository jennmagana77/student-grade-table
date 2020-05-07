class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage(newAverage) {
    console.log(newAverage)
    var badgeElement = this.headerElement.querySelector('.badge');
    badgeElement.textContent = newAverage;
  }
}
