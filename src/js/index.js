// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const cardListElement = document.getElementById('card-list');

const fetchData = url => fetch(url);

const printData = (filter, filter2) => {
  const request = fetchData('../data/data.json');
  request
    .then(response => response.json())
    .then(data => {
      const allCurrent = document.querySelectorAll('.card__current');
      const allPrevious = document.querySelectorAll('.card__previous');
      allCurrent.forEach((element, index) => {
        element.textContent = data[index].timeframes[filter].current + 'hrs';
        allPrevious[index].textContent = `${filter2} - ${data[index].timeframes[filter].previous}hrs`;
      });
    });
};

printData('weekly', 'Last week');

cardListElement.addEventListener('click', ev => {
  printData(ev.target.dataset.filter, ev.target.dataset.filter2);
  cardListElement.querySelector('.card__list-item--active').classList.remove('card__list-item--active');
  ev.target.classList.add('card__list-item--active');
});
